function CallableInstance(property)
{
	let self = this;
	let func = this.constructor.prototype[property];
	let apply = function ()
	{
		return func.apply(apply, arguments);
	};
	Object.setPrototypeOf(apply, this.constructor.prototype);
	Object.getOwnPropertyNames(func)
		.forEach(function (p)
		{
			Object.defineProperty(apply, p, Object.getOwnPropertyDescriptor(func, p));
		})
	;
	return apply;
}

CallableInstance.prototype = Object.create(Function.prototype);

module.exports.CallableInstance = CallableInstance;
module.exports.default = CallableInstance;

//module.exports = Object.freeze(module.exports);
