import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface IOrders {
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

const AddedOrdersList = ({
  orders,
  setSelectedOrders,
}: {
  orders: IOrders[];
  setSelectedOrders: React.Dispatch<React.SetStateAction<IOrders[]>>;
}) => {
  const t = useTranslations("CreateOrderPage");
  const keys = [
    "product",
    "price",
    "quantity",
    "totalPrice",
    "commission",
    "size",
    "action",
  ];
  return (
    <Table aria-label="orders list tabel data" className="p-2" align="center">
      <TableHeader>
        {keys.map((key, i) => (
          <TableColumn key={i}>
            <div className="text-[#71717A] text-14">{t(key)}</div>
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {orders.map(
          ({ productName, imgUrl, quantity, commission, price, id }, i) => (
            <TableRow
              className="duration-500 hover:bg-stone-100 rounded"
              key={i}
            >
              <TableCell>
                <div className="flex items-center gap-4 flex-wrap">
                  <Image
                    src={imgUrl}
                    width={50}
                    height={50}
                    alt={productName}
                  />
                  {productName}
                </div>
              </TableCell>
              <TableCell>
                {price} {t("LE")}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedOrders((prevOrders) =>
                        prevOrders.map((product) =>
                          product.id === id
                            ? {
                                ...product,
                                quantity: (+quantity - 1).toString(),
                              }
                            : product
                        )
                      )
                    }
                    className={`p-1 rounded-lg bg-red-600 ${
                      +quantity === 1 ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    <Minus size={14} color="white" />
                  </button>
                  <span className="text-18 font-bold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedOrders((prevOrders) =>
                        prevOrders.map((product) =>
                          product.id === id
                            ? {
                                ...product,
                                quantity: (+quantity + 1).toString(),
                              }
                            : product
                        )
                      );
                    }}
                    className="p-1 rounded-lg bg-green-600"
                  >
                    <Plus size={14} color="white" />
                  </button>
                </div>
              </TableCell>
              <TableCell>
                {+price * +quantity + +commission * +quantity}
              </TableCell>
              <TableCell>{commission * +quantity}</TableCell>
              <TableCell>{`size`}</TableCell>
              <TableCell>
                <Button
                  variant="bordered"
                  size="sm"
                  color="danger"
                  onClick={() => {
                    setSelectedOrders((orders) =>
                      orders.filter((order) => order?.id! !== id!)
                    );
                  }}
                >
                  {t("delete")}
                </Button>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};
export default AddedOrdersList;
