import { TOKEN_POST } from "../api";
import createAsyncSlice from "./helper/createAsyncSlice";

const slice = createAsyncSlice({
  name: "token",
  fetchConfig: (user) => TOKEN_POST(user),
});

export const tokenFetch = slice.asyncAction;

export default slice.reducer;