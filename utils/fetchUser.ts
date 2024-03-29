export const fetchuser = async (email: string) => {
  const res = await fetch(`${process.env.API_ROOT}/user435/user/${email}`)

  const comments = await res.json()
  const status = res.status

  return status
}
