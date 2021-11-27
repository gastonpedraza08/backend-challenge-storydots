const { Sequelize } = require('../models');
const ControllerError = require('./ControllerError');

function errorHandler(err, req, res, next) {

	let statusCode = 500;
	let error = 'Internal error';

	console.log(err);

	switch (err.constructor) {
		case Sequelize.BaseError:
			console.log("log switch = Sequelize.BaseError")
			break;
		case Sequelize.ValidationError:
			console.log("log switch = Sequelize.ValidationError")
			break;
		case Sequelize.DatabaseError:
			console.log("log switch = Sequelize.DatabaseError")
			statusCode = 400;
			error = err.original.sqlMessage;
			break;
		case Sequelize.TimeoutError:
			console.log("log switch = Sequelize.TimeoutError")
			break;
		case Sequelize.UniqueConstraintError:
			console.log("log switch = Sequelize.UniqueConstraintError")
			break;
		case Sequelize.ForeignKeyConstraintError:
			console.log("log switch = Sequelize.ForeignKeyConstraintError")
			break;
		case Sequelize.ExclusionConstraintError:
			console.log("log switch = Sequelize.ExclusionConstraintError")
			break;
		case Sequelize.ValidationErrorItem:
			console.log("log switch = Sequelize.ValidationErrorItem")
			break;
		case Sequelize.ConnectionError:
			console.log("log switch = Sequelize.ConnectionError")
			break;
		case Sequelize.ConnectionRefusedError:
			console.log("log switch = Sequelize.ConnectionRefusedError")
			break;
		case Sequelize.AccessDeniedError:
			console.log("log switch = Sequelize.AccessDeniedError")
			break;
		case Sequelize.HostNotFoundError:
			console.log("log switch = Sequelize.HostNotFoundError")
			break;
		case Sequelize.HostNotReachableError:
			console.log("log switch = Sequelize.HostNotReachableError")
			break;
		case Sequelize.InvalidConnectionError:
			console.log("log switch = Sequelize.InvalidConnectionError")
			break;
		case Sequelize.ConnectionTimedOutError:
			console.log("log switch = Sequelize.ConnectionTimedOutError")
			break;
		case Sequelize.InstanceError:
			console.log("log switch = Sequelize.InstanceError")
			break;
		case ControllerError:
			console.log("log switch = ControllerError")
			error = err.message;
			statusCode = err.statusCode;
			break;
		default:
			console.log("log switch = default");
			break;
	}

  res.status(statusCode).json({
  	error
  });
}

module.exports = errorHandler;