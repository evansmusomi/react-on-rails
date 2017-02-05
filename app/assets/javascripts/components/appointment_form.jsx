var AppointmentForm = React.createClass({
    handleChange: function(e){
        var name = e.target.name;
        obj = {};
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    },

    handleSubmit: function(e){
        e.preventDefault();
        this.props.onFormSubmit();
    },

    setAppointmentTime: function(e){
        var name = 'appointment_time';
        var obj = {};
        if(obj[name] = e.toDate()){
            this.props.onUserInput(obj);
        }
    },

    render: function(){
        var inputProps = {
            name: 'appointment_time'
        };

        return (
            <div>
                <h3>Make a new Appointment</h3>
                <form onSubmit={this.handleSubmit}>
                    <input name='title' placeholder='Appointment Title'
                        value={this.props.title}
                        onChange={this.handleChange} />
                    <Datetime input={false} open={true} inputProps={inputProps}
                        value={this.props.appointment_time}
                        onChange={this.setAppointmentTime} />
                    <input type='submit' value='Make Appointment' />
                </form>
            </div>
        )
    }
});
