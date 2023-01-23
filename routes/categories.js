const router = require("express").Router()
const auth = require("../middleware/auth")
const { categoryValidator } = require("../model/categories")
const validator = require("../middleware/validate")
const category = require("../controller/categories")


// 获取分类列表
router.get("/", category.getCategoryList)

// 获取指定分类
router.get("/:id", category.getCategory)

// 新增分类
router.post("/", [auth, validator(categoryValidator)], category.createCategory)

// 更新分类
router.patch("/:id", [auth, validator(categoryValidator)], category.updateCategory)

// 删除分类
router.delete("/:id", auth, category.deleteCategory)

module.exports = router