class AppointmentsController < ApplicationController
  def index
      @appointments = Appointment.order('appointment_time ASC')
      @appointment = Appointment.new
  end

  def create
      @appointment = Appointment.create(appointment_params)
      @appointments = Appointment.order('appointment_time ASC')
  end

  private
  def appointment_params
      params.require(:appointment).permit(:title, :appointment_time)
  end
end
