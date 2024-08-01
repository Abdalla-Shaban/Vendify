"use client";
import { OrdersListStatus } from "@/constants";
import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import OrdersList from "../OrdersList";

let orders = [
  {
    id: 1,
    productName: "T-shirt",
    productAuthor: "Zara",
    fullName: "Abdullah Shaban",
    phoneNumber: "01121795091",
    extraPhoneNumber: "01143010140",
    governorate: "Giza",
    city: "hawmdia",
    address: "abu lasheen",
    moderatorName: "Bouda",
    notes: "مستعجل",
    date: "16/8/2024",
    totalPrice: "600",
    status: "success",
    transferDateForShipping: "7/31/2024",
    confirmationDate: "24/8/2024",
    reason: "",
  },
  {
    id: 2,
    productName: "Short",
    productAuthor: "Defacto",
    fullName: "Ebrahim Farghaly",
    phoneNumber: "034765181534",
    extraPhoneNumber: "034765181534",
    governorate: "Cairo",
    city: "Helwan",
    address: "metro",
    moderatorName: "Amany",
    notes: "",
    date: "7/31/2024",
    totalPrice: "600",
    status: "pending",
    transferDateForShipping: "7/31/2024",
    confirmationDate: "08/03/2024",
    reason: "",
  },
];
type TSearchedData = {
  startDate: string;
  endDate: string;
  status: string;
};
const Orders = () => {
  const t = useTranslations("OrdersPage");
  const [filteredData, setFilteredData] = useState<typeof orders>(orders);
  const [serachQuery, setSearchQuery] = useState<string>("");
  const [searchedData, setSearchedData] = useState<TSearchedData>({
    startDate: "",
    endDate: "",
    status: "",
  });
  const startDateRef = useRef(null);
  const handleViewAll = () => {
    setFilteredData(orders);
    setSearchQuery("");
  };
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredItems = orders.filter(
      ({
        fullName,
        phoneNumber,
        extraPhoneNumber,
        productAuthor,
        productName,
        status,
      }) =>
        fullName.toLowerCase().includes(query) ||
        phoneNumber.toLowerCase().includes(query) ||
        extraPhoneNumber.toLowerCase().includes(query) ||
        productAuthor.toLowerCase().includes(query) ||
        productName.toLowerCase().includes(query) ||
        status.toLowerCase().includes(query)
    );
    setFilteredData(filteredItems);
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Input
            isClearable
            onClear={() => {
              setSearchQuery("");
              setFilteredData(orders);
            }}
            className="flex-1"
            size="lg"
            variant="bordered"
            startContent={<Search size={18} />}
            placeholder={t("searchPlaceHolder")}
            value={serachQuery}
            onChange={handleSearch}
          />
          <div className="w-full flex-1">
            <Button
              onClick={handleViewAll}
              className="w-full lg:max-w-52 bg-green-950 text-16 text-white"
            >
              {t("viewAllLink")}
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3">
          <DatePicker
            variant="bordered"
            label={t("startDate")}
            name="startDate"
            onChange={(e) => {
              const { day, month, year } = e;
              const formatDate = `${day}/${month}/${year}`;
              setSearchedData({
                ...searchedData,
                startDate: formatDate,
              });
              const filteredItems = orders.filter(({ date }) =>
                date.toLowerCase().includes(formatDate)
              );
              setFilteredData(filteredItems);
            }}
          />
          <DatePicker
            variant="bordered"
            label={t("endDate")}
            name="endDate"
            ref={startDateRef}
            onChange={(e) => {
              const { day, month, year } = e;
              const formatDate = `${day}/${month}/${year}`;
              setSearchedData({
                ...searchedData,
                endDate: formatDate,
              });
              const filteredItems = orders.filter(({ confirmationDate }) =>
                confirmationDate.toLowerCase().includes(formatDate)
              );

              setFilteredData(filteredItems);
            }}
          />
          <Select
            onChange={(e) => {
              const filteredItems = orders.filter(({ status }) =>
                status.toLowerCase().includes(`${e.target.value}`)
              );
              setFilteredData(filteredItems);
            }}
            variant="bordered"
            label={t("status")}
            name="status"
          >
            {OrdersListStatus.map((status) => (
              <SelectItem value={status} key={status}>
                {t(status)}
              </SelectItem>
            ))}
          </Select>
        </div>
        <Link
          className="max-w-fit bg-green-950 py-2 px-4 rounded-xl text-16 text-white"
          href="/affiliate/orders/create"
        >
          {t("addOrderLink")}
        </Link>
      </div>
      <OrdersList orders={filteredData} />
    </>
  );
};

export default Orders;
