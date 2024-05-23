const ErrorResponse = require ('../utils/errorResponse');
const asyncHandler = require ('../middleware/async');
const Course = require('../models/Course');


//@desc    GET courses
//@route   GET /api/v1/courses
//@route   GET /api/v1/bootcamps/:bootcampId/courses
//@access  Public

exports.getCourses = asyncHandler(async(req, res, next)=>{
    
})