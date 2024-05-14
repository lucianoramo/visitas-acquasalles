import React, { useState } from "react";
import { Checkbox, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import type { CardProps } from "@material-tailwind/react";
type variant = "filled" | "gradient";
type color = "light" | "dark";

import type { CheckboxProps } from "@material-tailwind/react";
import type { CheckboxStylesType } from "@material-tailwind/react";

const items = [
	"pH",
	"Cloro",
	"Turbidez",
	"Cor",
	"Dureza Total",
	"Ferro Total",
	"Manganês Total",
	"Nitrogênio Nitrato",
	"Cobre",
	"Fluoreto",
	"Sílica",
];

function MedicaoMensal() {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const handleCheckboxChange = (event: { target: { name: string; checked: boolean } }) => {
		const { name, checked } = event.target;

		setSelectedItems((prevState: string[]) => {
			if (checked) {
				return [...prevState, name];
			} else {
				return prevState.filter((item) => item !== name);
			}
		});
	};

	return (
		<div className="flex w-[80%] p-4 justify-between items-center">
			{items.map((item) => (
				<div
					key={item}
					className="p-2">
					<label className="flex flex-row m-2">
						<input
							type="checkbox"
							name={item}
							onChange={handleCheckboxChange}
						/>
						{item}
					</label>
				</div>
			))}
		</div>
	);
}

export default MedicaoMensal;
