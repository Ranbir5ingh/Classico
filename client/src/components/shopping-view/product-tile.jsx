import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="flex flex-col justify-between w-full max-w-sm mx-auto">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-30 md:h-[250px] lg:h-[300px] object-cover rounded-t-lg"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              <span className="text-[1.2vh] lg:text-xs md:text-xs">Out Of Stock</span>
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              <span className="text-[1.2vh] lg:text-xs md:text-xs">{`Only ${product?.totalStock} items left`}</span>
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              <span className="text-[1.2vh] lg:text-xs md:text-xs">Sale</span>
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-0 px-3 md:p-4 lg:p-4">
        <div className="flex justify-between items-center mb-2">
            <span className="text-[1.5vh] text-xs font-semibold lg:text-[16px] lg:text-muted-foreground md:text-[16px] md:text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-[1.5vh] text-xs font-semibold lg:text-[16px] lg:text-muted-foreground md:text-[16px] md:text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <h2 className="text-[1.8vh] text-muted-foreground mb-2 md:text-xl md:font-bold md:text-primary lg:text-xl lg:font-bold lg:text-primary">{product?.title}</h2>
          
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-xs lg:text-lg md:text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-xs lg:text-lg md:text-lg font-semibold text-primary">
                ${product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-3 pt-0 md:p-6 md:pt-0 lg:p-6 lg:pt-0">
        {product?.totalStock === 0 ? (
          <Button className="w-full h-8 md:h-10 lg:h-10 opacity-60 cursor-not-allowed">
            <span className="text-[1.6vh] md:text-sm lg:text-sm">Out Of Stock</span>
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full h-8 md:h-10 lg:h-10"
          >
            <span className="text-[1.6vh] md:text-sm lg:text-sm">Add to cart</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
