class AppointmentForm extends React.Component{
    handleChange(e){
        const name = e.target.name;
        obj = {};
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit();
    }

    setAppointmentTime(e){
        const name = 'appointment_time';
        const obj = {};
        if(obj[name] = e.toDate()){
            this.props.onUserInput(obj);
        }
    }

    render(){
        const inputProps = {
            name: 'appointment_time'
        };

        return (
            <div>
                <h3>Make a new Appointment</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input name='title' placeholder='Appointment Title'
                        value={this.props.title}
                        onChange={(event) => this.handleChange(event)} />
                    <Datetime input={false} open={true} inputProps={inputProps}
                        value={this.props.appointment_time}
                        onChange={(event) => this.setAppointmentTime(event)} />
                    <input type='submit' value='Make Appointment' className='submit-button' />
                </form>
            </div>
        )
    }
}
