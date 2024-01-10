import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AccountBtn = ({ user }: { user: string }) => {
  return (
    <div className="flex justify-center">
      <form className="w-[85%] flex flex-col items-center">
        <input
          className="w-1/2 p-2 mb-2 text-center outline-blue-500 shadow-lg"
          type="text"
          defaultValue={user}
          placeholder="username"
        />

        <button
          type="button"
          className="w-1/2 flex justify-center items-center gap-2 text-white bg-blue-600 border py-2 px-4 shadow-lg"
        >
          <span>Claim Your Username</span>
          <FontAwesomeIcon icon={faArrowRight} className="w-5" />
        </button>
      </form>
    </div>
  );
};

export default AccountBtn;
