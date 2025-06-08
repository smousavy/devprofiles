import {
  Control,
  Controller,
  RegisterOptions,
  FieldValues,
  Path,
} from "react-hook-form";
import CustomDatepicker from "./CustomDatepicker";
import CustomError from "./CustomError";

interface Props<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T, Path<T>>;
  label?: string;
}

export default function CustomDatepickerRFH<T extends FieldValues>({
  name,
  control,
  rules,
}: Props<T>) {
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
