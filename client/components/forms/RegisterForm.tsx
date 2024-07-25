"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button, DatePicker } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import {
  GovernoratesAndCitiesAR,
  GovernoratesAndCitiesEN,
  titles,
} from "@/constants";
import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import RequiredStar from "./components/RequiredStar";
const formShcema = z
  .object({
    title: z.string().min(1, { message: "Title is Requierd" }),
    firstName: z.string().min(1, { message: "First Name is Requierd" }),
    lastName: z.string().min(1, { message: "Last Name is Requierd" }),
    email: z.string().min(1, { message: "Email is Requierd" }).email(),
    phone: z.string().min(1, { message: "Phone is Requierd" }),
    address: z.string().min(1, { message: "Address is Requierd" }),
    password: z.string().min(1, { message: "Password is Requierd" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is Required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formShcema>>({
    resolver: zodResolver(formShcema),
  });
  const locale = useLocale();
  const t = useTranslations("RegisterForm");
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    governorate: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const filterdCities =
    locale === "ar"
      ? GovernoratesAndCitiesAR.filter(
          ({ key }) => key === formData.governorate
        ).map(({ cities }) => cities)
      : GovernoratesAndCitiesEN.filter(
          ({ key }) => key === formData.governorate
        ).map(({ cities }) => cities);

  return (
    <form
      onSubmit={handleSubmit((d) => {
        setFormData({
          ...d,
          dateOfBirth: formData.dateOfBirth,
          governorate: formData.governorate,
          city: formData.city,
        });
      })}
      className="flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <div className="min-w-24 flex flex-col">
          <Select
            variant="bordered"
            className="max-w-24"
            label={
              <>
                {t("selectTitle.title")} <RequiredStar />
              </>
            }
            {...register("title")}
          >
            {titles.map(({ key, label }) => (
              <SelectItem value={formData.title} key={key}>
                {label}
              </SelectItem>
            ))}
          </Select>
          {errors.title?.message && (
            <ErrorMessage message={errors.title?.message} />
          )}
        </div>
        <div className="w-full flex flex-col">
          <Input
            variant="bordered"
            label={
              <>
                {t(`firstName.title`)} <RequiredStar />
              </>
            }
            type="text"
            {...register("firstName")}
          />
          {errors.firstName?.message && (
            <ErrorMessage message={errors.firstName?.message} />
          )}
        </div>
        <div className="w-full flex flex-col">
          <Input
            variant="bordered"
            label={
              <>
                {t(`lastName.title`)} <RequiredStar />
              </>
            }
            type="text"
            {...register("lastName")}
          />
          {errors.lastName?.message && (
            <ErrorMessage message={errors.lastName?.message} />
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-full flex flex-col">
          <Input
            variant="bordered"
            type="text"
            label={
              <>
                {t(`email.title`)} <RequiredStar />
              </>
            }
            {...register("email")}
          />
          {errors.email?.message && (
            <ErrorMessage message={errors.email?.message} />
          )}
        </div>
        <div className="w-full flex flex-col">
          <Input
            variant="bordered"
            type="text"
            label={
              <>
                {t(`phone.title`)} <RequiredStar />
              </>
            }
            {...register("phone")}
          />
          {errors.phone?.message && (
            <ErrorMessage message={errors.phone?.message} />
          )}
        </div>
      </div>
      <div className="w-full flex flex-col">
        <DatePicker
          variant="bordered"
          label={
            <>
              {t("dateOfBirth.title")} <RequiredStar />
            </>
          }
          name="dateOfBirth"
          onChange={(e) => {
            const { day, month, year } = e;
            setFormData({
              ...formData,
              dateOfBirth: `${day}/${month}/${year}`,
            });
          }}
        />
      </div>
      <div className="w-full flex items-center gap-3">
        <Autocomplete
          defaultItems={[]}
          variant="bordered"
          label={
            <>
              {t("governorate.title")} <RequiredStar />
            </>
          }
          onSelectionChange={(e) =>
            setFormData({ ...formData, governorate: `${e}` })
          }
        >
          {locale === "en"
            ? GovernoratesAndCitiesEN.map(({ key, name }) => (
                <AutocompleteItem key={key}>{name}</AutocompleteItem>
              ))
            : GovernoratesAndCitiesAR.map(({ key, name }) => (
                <AutocompleteItem key={key}>{name}</AutocompleteItem>
              ))}
        </Autocomplete>
        <Autocomplete
          defaultItems={[]}
          variant="bordered"
          onSelectionChange={(e) => setFormData({ ...formData, city: `${e}` })}
          label={
            <>
              {t("city.title")} <RequiredStar />
            </>
          }
        >
          {filterdCities[0]?.map((city) => (
            <AutocompleteItem key={city}>{city}</AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
      <div className="flex flex-col w-full">
        <Input
          variant="bordered"
          type="text"
          label={
            <>
              {t(`address.title`)} <RequiredStar />
            </>
          }
          {...register("address")}
        />
        {errors.address?.message && (
          <ErrorMessage message={errors.address?.message} />
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col w-full">
          <Input
            variant="bordered"
            type="password"
            label={
              <>
                {t(`password.title`)} <RequiredStar />
              </>
            }
            {...register("password")}
          />
          {errors.password?.message && (
            <ErrorMessage message={errors.password?.message} />
          )}
        </div>
        <div className="flex flex-col w-full">
          <Input
            variant="bordered"
            type="password"
            label={
              <>
                {t(`confirmPassword.title`)} <RequiredStar />
              </>
            }
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <ErrorMessage message={errors.confirmPassword?.message} />
          )}
        </div>
      </div>
      <Button
        variant="bordered"
        type="submit"
        className="min-w-72 mx-auto bg-green-950 text-white"
      >
        {t("submitButton.title")}
      </Button>
    </form>
  );
};

export default RegisterForm;
