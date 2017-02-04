var AppointmentForm = React.createClass({
    handleChange: function(e){
        var name = e.target.name;
        obj = {};
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    },

    render: function(){
        return (
            <div>
                <h3>Make a new Appointment</h3>
                <form>
                    <input name='title' placeholder='Appointment Title'
                        value={this.props.input_title}
                        onChange={this.handleChange} />
                    <input name='appointment_time' placeholder='Date and Time'
                        value={this.props.input_appointment_time}
                        onChange={this.handleChange} />
                    <input type='submit' value='Make Appointment' />
                </form>
            </div>
        )
    }
});
