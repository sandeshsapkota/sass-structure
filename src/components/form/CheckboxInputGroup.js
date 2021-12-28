function CheckboxInputGroup() {
    return (
        <div className="custom-input">
            <div>
                <input id={'male'} name={'gender'} type="radio"/>
                <label htmlFor="male">Male</label>
            </div>
            <div>
                <input id={'female'} name={'gender'} type="radio"/>
                <label htmlFor="female">Female</label>
            </div>
            <div>
                <input id={'other'} name={'gender'} type="checkbox"/>
                <label htmlFor="other">other</label>
            </div>
        </div>
    );
}


export default CheckboxInputGroup;
