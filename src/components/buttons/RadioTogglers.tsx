import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Options {
  value: string;
  icon: any;
  label: string;
}

const RadioTogglers = ({
  options,
  defaultChecked,
  onChange,
}: {
  options: [Options, Options];
  defaultChecked: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="radio-togglers p-2 py-3 bg-gray-200">
      {options.map((option) => (
        <label key={option.label}>
          <input
            type="radio"
            name="bgType"
            value={option.value}
            defaultChecked={option?.value === defaultChecked}
            onClick={(event) => onChange(event?.target?.value)}
          />
          <span className="text-gray-500 hover:text-gray-600 hover:cursor-pointer">
            <FontAwesomeIcon icon={option?.icon} className="w-4" />
            <span>
              {option?.label}
            </span>
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioTogglers;
