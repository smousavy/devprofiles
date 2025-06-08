import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { DateObject } from "react-multi-date-picker";
interface Props {
  value?: DateObject | string | null;
  onChange?: (value: DateObject | Date | string | null) => void;
}
export default function CustomDatepicker({ value, onChange }: Props) {
  return (
    <DatePicker
      containerStyle={{ width: "100%" }}
      format="YYYY/MM/DD"
      calendar={persian}
      locale={persian_fa}
      value={value}
      onChange={onChange}
      inputClass="input"
    />
  );
}
