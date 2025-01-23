import { ExternalLink, Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

export default function ShoppingFooter() {
  return (
    <div className='hidden w-full lg:flex bg-white fixed bottom-0 z-40 items-center justify-between h-16 p-4 border-t'>
        <div className='flex items-center justify-center gap-3'>
            <span className='text-sm text-muted-foreground'>View Source Code</span>
            <a href="https://github.com/Ranbir5ingh/Classico" target="_blank" className='flex items-center justify-center gap-2'>
                <span className='text-sm font-semibold'>GitHub Repo</span>
                <ExternalLink className='w-4 h-4'/>
            
        </a>
        </div>
        
        <div className="flex items-center justify-start gap-3 p-2 h-12">
                <a href="https://www.linkedin.com/in/ranbir-singh-92a578288/" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Ranbir5ingh" target="_blank">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/it.s_bir/" target="_blank">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
    </div>
  )
}
