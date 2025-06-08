import { Control, Controller, RegisterOptions } from "react-hook-form";
import CustomDatepicker from "./CustomDatepicker";
import CustomError from "./CustomError";
interface Props {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  label?: string;
}
export default function CustomDatepickerRFH({ name, control, rules }: Props) {
  return (
    <div className="space-y-2">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <CustomDatepicker value={field.value} onChange={field.onChange} />

            <CustomError error={fieldState.error?.message} />
          </>
        )}
      />
    </div>
  );
}
