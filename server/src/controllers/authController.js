import * as authService from "../services/authService";

export const register = async (req, res) => {
  const { name, phone, password } = req.body;
  try {
    if (!name || !phone || !password) {
      return res.status(400).json({
        err: 1,
        msg: "Missing required fields",
      });
    }
    const response = await authService.registerService(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller: " + error.message,
    });
  }
};

export const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    if (!phone || !password) {
      return res.status(400).json({
        err: 1,
        msg: "Missing required fields",
      });
    }
    const response = await authService.loginService(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller: " + error.message,
    });
  }
};
