export const fetchowmjob = async (email: string) => {
  const res = await fetch(`${process.env.API_ROOT}/job435/jobs/${email}`)

  const comments = await res.json()
  const status = res.status
  const resp = {
    data: { comments },
    status: status,
  }

  return resp
}
