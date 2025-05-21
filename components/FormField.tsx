import React from 'react'
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Controller, FieldValues, Control, Path } from 'react-hook-form';
import { Input } from './ui/input';

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: "text" | "email" | "password" | "file";
}

const FormField = ({ control, name, label, placeholder, type="text" }: FormFieldProps<T>) => (
    <Controller
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input className='input' placeholder={placeholder} type={type} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
)

export default FormField
