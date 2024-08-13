"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";
import {
  Button,
  Textarea,
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  DatePicker,
} from "@nextui-org/react";
import {
  GovernoratesAndCitiesAR,
  GovernoratesAndCitiesEN,
  Orders,
} from "@/constants";
import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import RequiredStar from "./components/RequiredStar";
import Image from "next/image";
import AddedOrdersList from "../AddedOrdersList";

interface IOrder {
  id?: number | string;
  productName: string;
  productAuthor: string;
  fullName: string;
  phoneNumber: string;
  extraPhoneNumber: string;
  governorate: string;
  city: string;
  address: string;
  moderatorName?: string;
  notes?: string;
  date: string;
  price: string;
  status: string;
  transferDateForShipping: string;
  confirmationDate: string;
  reason?: string;
  imgUrl: string;
  commission: number;
  quantity: string;
}
const formShcema = z.object({
  orderType: z.string().min(1, { message: "Type is Requierd" }),
  fullName: z.string().min(1, { message: "Full Name is Requierd" }),
  governorate: z.string().min(1, { message: "Governorate is Requierd" }),
  city: z.string().min(1, { message: "City is Requierd" }),
  phone: z.string().min(1, { message: "Phone is Requierd" }),
  address: z.string().min(1, { message: "Address is Requierd" }),
});

const CreateOrderForm = () => {
  const [selectedOrders, setSelectedOrders] = useState<IOrder[]>([]);
  const [shipping, setShipping] = useState<string>("later");
  const [formData, setFormData] = useState({
    governorate: "",
    city: "",
    shipping: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formShcema>>({
    resolver: zodResolver(formShcema),
  });
  const locale = useLocale();
  const t = useTranslations("CreateOrderPage");
  const filterdCities =
    locale === "ar"
      ? GovernoratesAndCitiesAR.filter(
          ({ key }) => key === formData.governorate
        ).map(({ cities }) => cities)
      : GovernoratesAndCitiesEN.filter(
          ({ key }) => key === formData.governorate
        ).map(({ cities }) => cities);
  const keys = ["newOrder", "partialDeliveryOrder", "replacementOrder"];
  return (
    <form
      onSubmit={handleSubmit((d) => {
        setFormData({
          ...d,
          governorate: formData.governorate,
          city: formData.city,
          shipping: formData.shipping,
        });
        console.log("submitted");
      })}
      className="flex flex-col gap-5"
    >
      <div className="w-full flex flex-col">
        <Select
          variant="bordered"
          size="lg"
          label={
            <>
              {t("selectOrderTypeLabel")} <RequiredStar />
            </>
          }
          labelPlacement="outside"
          placeholder={t("selectOrderTypePlaceHolder")}
          {...register("orderType")}
        >
          {keys.map((key) => (
            <SelectItem value={t(key)} key={key}>
              {t(key)}
            </SelectItem>
          ))}
        </Select>
        {errors.orderType?.message && (
          <ErrorMessage message={errors.orderType?.message} />
        )}
      </div>
      <div className="w-full flex flex-col">
        <Input
          variant="bordered"
          size="lg"
          label={
            <>
              {t(`fullNameInputLabel`)} <RequiredStar />
            </>
          }
          labelPlacement="outside"
          placeholder={t(`fullNameInputPlaceHolder`)}
          type="text"
          {...register("fullName")}
        />
        {errors.fullName?.message && (
          <ErrorMessage message={errors.fullName?.message} />
        )}
      </div>
      <div className="w-full flex flex-col">
        <Input
          variant="bordered"
          size="lg"
          type="text"
          label={
            <>
              {t(`phoneInputLabel`)} <RequiredStar />
            </>
          }
          labelPlacement="outside"
          placeholder={t("phoneInputPlacHolder")}
          {...register("phone")}
        />
        {errors.phone?.message && (
          <ErrorMessage message={errors.phone?.message} />
        )}
      </div>
      <div className="w-full flex flex-col">
        <Input
          variant="bordered"
          size="lg"
          type="text"
          label={
            <>
              {t(`anotherPhoneInputLabel`)} <RequiredStar />
            </>
          }
          labelPlacement="outside"
          placeholder={t("anotherPhoneInputPlaceHolder")}
        />
      </div>
      <Select
        variant="bordered"
        size="lg"
        label={
          <>
            {t("selectGovernorateLabel")} <RequiredStar />
          </>
        }
        labelPlacement="outside"
        placeholder={t("selectGovernoratePlaceHolder")}
        {...register("governorate", {
          onChange(e) {
            setFormData({ ...formData, governorate: `${e.target.value}` });
          },
        })}
      >
        {locale === "en"
          ? GovernoratesAndCitiesEN.map(({ key, name }) => (
              <SelectItem value={formData.governorate} key={key}>
                {name}
              </SelectItem>
            ))
          : GovernoratesAndCitiesAR.map(({ key, name }) => (
              <SelectItem value={formData.governorate} key={key}>
                {name}
              </SelectItem>
            ))}
      </Select>
      <Select
        variant="bordered"
        size="lg"
        label={
          <>
            {t("selectCityLabel")} <RequiredStar />
          </>
        }
        placeholder={t("selectCityPlaceHolder")}
        labelPlacement="outside"
        {...register("city", {
          onChange(e) {
            setFormData({ ...formData, city: `${e.target.value}` });
          },
        })}
      >
        {filterdCities[0]?.map((city) => (
          <SelectItem value={formData.city} key={city}>
            {city}
          </SelectItem>
        ))}
      </Select>
      <div className="flex flex-col w-full">
        <Input
          variant="bordered"
          size="lg"
          type="text"
          label={
            <>
              {t(`addressInputLabel`)} <RequiredStar />
            </>
          }
          labelPlacement="outside"
          placeholder={t(`addressInputPlaceHolder`)}
          {...register("address")}
        />
        {errors.address?.message && (
          <ErrorMessage message={errors.address?.message} />
        )}
      </div>
      <Input
        variant="bordered"
        size="lg"
        type="text"
        label={t("moderatorInputLabel")}
        labelPlacement="outside"
        placeholder={t("moderatorInputPlaceHolder")}
      />
      <Input
        variant="bordered"
        size="lg"
        type="text"
        label={t("clientPageLinkInputLabel")}
        labelPlacement="outside"
        placeholder={t(`clientPageLinkInputPlacHolder`)}
      />
      <Textarea
        variant="bordered"
        size="lg"
        label={t("notesTextAreaLabel")}
        labelPlacement="outside"
        placeholder={t(`notesTextAreaPlaceHolder`)}
      />

      <Autocomplete
        variant="bordered"
        size="lg"
        label={t("addProductAutoCompleteLabel")}
        labelPlacement="outside"
        placeholder={t("addProductAutoCompletePlaceHolder")}
        onSelectionChange={(orderID) => {
          const selectedOrder = Orders.find(({ id }) => +id === +orderID!);
          if (selectedOrder) {
            const existingOrder = selectedOrders.find(
              ({ id }) => +id! === +orderID!
            );
            if (existingOrder) {
              existingOrder.quantity = (+existingOrder.quantity + 1).toString();
              setSelectedOrders([...selectedOrders]);
            } else {
              setSelectedOrders([...selectedOrders, { ...selectedOrder }]);
            }
          }
        }}
      >
        {Orders.map(({ id, imgUrl, productName }) => (
          <AutocompleteItem textValue={productName} key={id}>
            <div className="flex items-center gap-4">
              <Image src={imgUrl} width={50} height={50} alt={productName} />
              {productName}
            </div>
          </AutocompleteItem>
        ))}
      </Autocomplete>
      {selectedOrders.length !== 0 && (
        <AddedOrdersList
          orders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
        />
      )}
      <div className="flex items-center gap-3 p-5 bg-green-950/5 rounded-xl">
        <div className="font-semibold text-20">{t("shipping")}: </div>
        <div className="w-full flex flex-col md:flex-row md:items-center gap-5">
          <RadioGroup
            orientation="horizontal"
            value={shipping}
            onValueChange={setShipping}
          >
            <Radio value="now">{t("now")}</Radio>
            <Radio value="later">{t("later")}</Radio>
          </RadioGroup>
          {shipping === "later" && (
            <div className="flex-1">
              <DatePicker
                label={t("shippingDateLabel")}
                labelPlacement="outside"
                size="lg"
                variant="bordered"
                name="shippingDate"
                onChange={(e) => {
                  const { day, month, year } = e;
                  setFormData({
                    ...formData,
                    shipping: `${day}/${month}/${year}`,
                  });
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Button
        variant="bordered"
        size="lg"
        type="submit"
        className="w-full md:max-w-72 bg-green-950 text-white mt-5"
      >
        {t("submitButton")}
      </Button>
    </form>
  );
};

export default CreateOrderForm;
