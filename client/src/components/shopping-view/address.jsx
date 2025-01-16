import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CommonForm from "../common/form";
import { addressFormControls } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAddress,
  deleteAddress,
  editAddress,
  fetchAllAddress,
} from "@/store/shop/address-slice";
import { useToast } from "@/hooks/use-toast";
import AddressCard from "./address-card";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};

export default function Address() {
  const [formData, setFormData] = useState(initialAddressFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.shopAddress);
  const { toast } = useToast();

  function handleManageAddress(event) {
    event.preventDefault();
    if (addressList.length >= 3 && currentEditedId===null) {
      setFormData(initialAddressFormData);
      toast({
        title: "You can only have 3 addresses",
        variant: "destructive",
      });
      return;
    }

    currentEditedId != null
      ? dispatch(
          editAddress({
            userId: user?.id,
            addressId: currentEditedId,
            formData,
          })
        )
          .then((data) => {
            if (data?.payload?.success) {
              toast({
                title: data?.payload?.message,
              });
              dispatch(fetchAllAddress(user?.id));
              setFormData(initialAddressFormData);
              setCurrentEditedId(null);
            }
          })
          .catch((err) => {
            console.log(err);
          })
      : dispatch(
          addNewAddress({
            ...formData,
            userId: user?.id,
          })
        )
          .then((data) => {
            if (data?.payload?.success) {
              toast({
                title: data?.payload?.message,
              });
              dispatch(fetchAllAddress(user?.id));
              setFormData(initialAddressFormData);
            }
          })
          .catch((err) => {
            console.log(err);
          });
  }

  function handleDeleteAddress(getCurrentAddress) {
    dispatch(
      deleteAddress({
        userId: user?.id,
        addressId: getCurrentAddress._id,
      })
    )
      .then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
          });
          dispatch(fetchAllAddress(user?.id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAddress(getCurrentAddress) {
    setCurrentEditedId(getCurrentAddress?._id);
    setFormData({
      ...formData,
      address: getCurrentAddress?.address,
      city: getCurrentAddress?.city,
      phone: getCurrentAddress?.phone,
      pincode: getCurrentAddress?.pincode,
      notes: getCurrentAddress?.notes,
    });
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }

  useEffect(() => {
    dispatch(fetchAllAddress(user?.id));
  }, [dispatch]);

  return (
    <Card>
      <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {addressList && addressList.length > 0
          ? addressList.map((singleAddressItem) => (
              <AddressCard
                addressInfo={singleAddressItem}
                handleDeleteAddress={handleDeleteAddress}
                handleEditAddress={handleEditAddress}
              ></AddressCard>
            ))
          : null}
      </div>
      <CardHeader>
        <CardTitle>
          {currentEditedId != null ? "Edit Address" : "Add New Address"}
        </CardTitle>
      </CardHeader>
      <CardContent className="sapce-y-3">
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={currentEditedId != null ? "Edit" : "Add"}
          onSubmit={handleManageAddress}
          isBtnDisabled={!isFormValid()}
        />
      </CardContent>
    </Card>
  );
}
