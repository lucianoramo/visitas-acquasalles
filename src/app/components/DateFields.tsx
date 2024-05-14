import React from "react";
import DatePicker from "react-datepicker";
import useStore from "../store";

import "react-datepicker/dist/react-datepicker.css";

const DateFields: React.FC = () => {
	const { startDate, endDate, setStartDate, setEndDate } = useStore();

	return (
		<div>
			<label>
				Data Inicial
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date as Date)}
				/>
			</label>
			<label>
				Data Final
				<DatePicker
					selected={endDate}
					onChange={(date) => setEndDate(date as Date)}
				/>
			</label>
		</div>
	);
};

export default DateFields;
