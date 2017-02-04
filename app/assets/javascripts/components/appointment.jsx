var Appointment = React.createClass({
    render: function(){
        return (
            <div>
                <h3>{this.props.appointment.title}</h3>
                <p>{this.props.appointment.appointment_time}</p>
            </div>
        )
    }
});
