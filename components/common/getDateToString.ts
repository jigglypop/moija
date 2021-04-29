export const getDateToString = ( date: Date ) =>{
  const new_date  =
  `${new Date(date).getFullYear()}년
   ${Number(new Date(date).getMonth()) + 1}월
   ${new Date(date).getDate()}일
   ${new Date(date).getHours()}시
   ${new Date(date).getMinutes()}분`
  return new_date
}
