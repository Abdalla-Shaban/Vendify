import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ChipProps,
  Chip,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface IOrders {
  id?: number | string;
  imgUrl: string;
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
  reason: string;
  commission: number;
  quantity: string;
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  success: "success",
  refund: "danger",
  pending: "warning",
};

const OrdersList = ({ orders }: { orders: IOrders[] }) => {
  const t = useTranslations("OrdersPage");
  const keys = [
    "orderInfo",
    "date",
    "totalPrice",
    "transferDateForShipping",
    "reason",
    "confirmationDate",
    "message",
    "status",
  ];
  return (
    <Table aria-label="orders list tabel data" className="p-2">
      <TableHeader>
        {keys.map((key, i) => (
          <TableColumn key={i}>
            <div className="text-[#71717A] text-14">{t(key)}</div>
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {orders.map(
          (
            {
              fullName,
              phoneNumber,
              extraPhoneNumber,
              governorate,
              city,
              address,
              notes,
              date,
              price,
              transferDateForShipping,
              reason,
              confirmationDate,
              status,
            },
            i
          ) => (
            <TableRow
              className="duration-500 hover:bg-stone-100 rounded"
              key={i}
            >
              <TableCell>
                <div className="flex flex-col gap-2 text-14 min-w-40 max-w-fit">
                  <div className="flex items-center gap-1">
                    <span className="font-bold capitalize">{t("name")}:</span>
                    {fullName}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold capitalize">{t("phone")}:</span>
                    {phoneNumber} <br /> {extraPhoneNumber}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold capitalize">
                      {t("governorate")}:
                    </span>
                    {governorate}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold capitalize">{t("city")}:</span>
                    {city}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold capitalize">
                      {t("address")}:
                    </span>
                    {address}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <p className="text-bold text-small capitalize">{date}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <p className="text-bold text-small capitalize">{price}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <p className="text-bold text-small capitalize">
                    {transferDateForShipping}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <p className="text-bold text-small capitalize">
                    {reason ? reason : t("noReason")}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <p className="text-bold text-small capitalize">
                    {confirmationDate}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <p className="text-bold text-small capitalize">
                    {notes ? notes : t("noMessage")}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <Chip
                  className="capitalize"
                  color={statusColorMap[`${status}`]}
                  size="md"
                  variant="flat"
                >
                  {t(status)}
                </Chip>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};
export default OrdersList;
