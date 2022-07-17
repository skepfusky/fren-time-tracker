import Moment from "react-moment"
import moment from "moment-timezone"

export default function CurrentTime() {
  const currentTimeGreet = () => {
    switch (moment().format("HH")) {
      case "00" || "01" || "02" || "03" || "04":
        return "Bruh how tf you awake"
      case "05" || "06" || "07" || "08" || "09" || "10" || "11" || "12":
        return "Good morning!"
      case "18" || "19" || "20" || "21" || "22" || "23":
        return "Good evening!"
      default:
        return "Good afternoon!"
    }
  }

  return (
    <div className={`p-8 flex flex-col gap-y-2 items-end border-b-2`}>
      <span className="text-xl">{currentTimeGreet()}</span>
      <Moment
        className="block text-6xl"
        format="h:mm:ss A"
        local
        interval={1000}
      ></Moment>
      <Moment
        className="block text-2xl"
        format="MMMM D YYYY"
        local
        interval={60000}
      ></Moment>
    </div>
  )
}
