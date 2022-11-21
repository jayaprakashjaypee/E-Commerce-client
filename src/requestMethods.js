import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWFlZGViMTE5NjE0M2M3ZDI5ZDk2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDE1NzQ0MiwiZXhwIjoxNjYwNDE2NjQyfQ.MA2DUTFD-PWicYPtU8zu23lFLNN_SQy1aem3D8k5A_8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
