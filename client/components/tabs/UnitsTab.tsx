import { Orders, statusColorMap } from "@/constants";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const UnitsTab = () => {
  const t = useTranslations("ReportsPage");
  const keys = [
    "orderCode",
    "orderImg",
    "clientName",
    "governorate",
    "status",
    "price",
    "quantity",
    "totalPrice",
    "commission",
  ];
  return (
    <Table align="center" aria-label="earnings list" className="p-2">
      <TableHeader>
        {keys.map((key, i) => (
          <TableColumn key={i}>
            <div className="text-[#71717A] text-14">{t(key)}</div>
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {Orders.map(
          (
            {
              id,
              imgUrl,
              fullName,
              governorate,
              status,
              price,
              commission,
              quantity,
            },
            i
          ) => (
            <TableRow
              className="duration-500 hover:bg-stone-100 rounded"
              key={i}
            >
              <TableCell>{id}</TableCell>
              <TableCell>
                <Image src={imgUrl} alt="product img" width={80} height={80} />
              </TableCell>
              <TableCell>{fullName}</TableCell>
              <TableCell>{governorate}</TableCell>
              <TableCell>
                <Chip
                  color={statusColorMap[`${status}`]}
                  size="md"
                  variant="flat"
                >
                  {t(status)}
                </Chip>
              </TableCell>
              <TableCell>
                {price} <span className="text-14 font-semibold">{t("LE")}</span>
              </TableCell>
              <TableCell>{+quantity}</TableCell>
              <TableCell>
                {+price * +quantity + +commission}{" "}
                <span className="text-14 font-semibold">{t("LE")}</span>
              </TableCell>
              <TableCell>
                {+commission}{" "}
                <span className="text-14 font-semibold">{t("LE")}</span>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default UnitsTab;
