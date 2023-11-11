import { FC } from 'react'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/shadcn-ui'

import { Input, Button } from '@/components/shadcn-ui'

import { LuSearch } from 'react-icons/lu'

const SearchDialog: FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button 
        variant='outline' 
        className="
          mb-2 
          ml-2
          gap-2 
          w-[95%]
          justify-start"
        >
        <LuSearch size={16} />
        <p className='text-base'>Search</p>
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-lg'>
          Search Channel
        </DialogTitle>
      </DialogHeader>
      <Input />
    </DialogContent>
  </Dialog>
)

export default SearchDialog
