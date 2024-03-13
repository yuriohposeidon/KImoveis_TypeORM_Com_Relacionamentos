import { handleError } from "./handleError.middleware";
import { idExists } from "./idExists.middleware";
import { uniqueCategory } from "./uniqueCategory.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyAdmin } from "./verifyAdmin.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { verifyAdminOrUser } from "./verifyAdminOrUser.middleware";
import { uniqueAddress } from "./uniqueAddress.middleware";

export default {
  handleError,
  idExists,
  uniqueCategory,
  uniqueEmail,
  validateBody,
  verifyAdmin,
  verifyToken,
  verifyAdminOrUser,
  uniqueAddress,
};
