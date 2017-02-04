var AppointmentForm = React.createClass({
    render: function(){
        return (
            <div>
                <h3>Make a new Appointment</h3>
                <form>
                    <input name='title' placeholder='Appointment Title' />
                    <input name='appointment_time' placeholder='Date and Time' />
                    <input type='submit' value='Make Appointment' />
                </form>
            </div>
        )
    }
});
