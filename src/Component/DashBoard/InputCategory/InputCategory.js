import React from 'react';

const InputCategory = () => {
    return (
        <div>
            <div className="w-2/4 mx-auto mt-10 shadow-md rounded-md p-10">
      <form>
       
        <br />
        <input
          type="text"
          placeholder="rating"
          name="rating"
          
          className="input input-bordered input-primary w-full"
          required
        />
        <br />
        <button
          className="flex items-center justify-center w-full p-3 mt-4 font-semibold tracking-wide rounded-md bg-gray-900 text-white"
          type="submit"
        >
          Add review
        </button>
      </form>
    </div>
        </div>
    );
};

export default InputCategory;