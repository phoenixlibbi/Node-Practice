const TourModel = require("./../models/tourModel");
const apiFeatures = require("./../utilities/apiFeatures");

//get all tours
exports.getAllTours = async (req, res) => {
  try {
      const features = new apiFeatures(TourModel.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const tours = await features;
    
    // const tours = await TourModel.find();
    console.log('in');
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours,
        },
    });
  } catch (err) {
    console.log(`error:${err}`);
    res.status(404).json({
      status: "failure",
      data: {
        message: err,
      },
    });
  }
};

//get tour by id
exports.getTour = async (req, res) => {
  try {
    const tour =await TourModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    console.log(`error:${err}`);
    res.status(404).json({
      status: "failure",
      data: {
        message: err,
      },
    });
  }
};

//delete tour
exports.deleteTour = async (req, res) => {
  try {
    const tour = TourModel.deleteById(req.params.id * 1);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "failure",
      data: {
        message: err,
      },
    });
  }
};

//create a tour
exports.createTour = async (req, res) => {
  try {
    const tour = TourModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failure",
      data: {
        message: err,
      },
    });
  }
};

//update a tour
exports.updateTour = async (req, res) => {
  try {
    const tour = tourModel.updateById(req.params.id * 1, req.body);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failure",
      data: {
        message: err,
      },
    });
  }
};
