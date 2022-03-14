import React, {Component} from 'react';
import Card from "../components/card";


class Quiz extends Component  {

	render () {

		return (
			<Card>
				<h5 className="text-grey text-2xl leading-tight font-medium mb-2">React Checkbox not sending onChange</h5>
				<div className="flex justify-center mt-5">
					<div className="form-check flex flex-col items-start">
							<div>
									<input className="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
												<label className="form-check-label inline-block text-gray-800"    for="flexRadioDefault1">
																			Hello
												</label>
							</div>
							<div>
                  <input className="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain  mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                          <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                            Welcome
													</label>
							</div>
							<div>
                  <input className="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain  mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                          How are you
												</label>
							</div>
					</div>
				</div>
      </Card>
		);
	}
	}

export default Quiz;
