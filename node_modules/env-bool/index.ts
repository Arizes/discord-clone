/**
 * Created by user on 2018/6/29/029.
 */

export function envVal(val: undefined | 'undefined'): undefined
export function envVal(val: null | 'null'): null
export function envVal(val: boolean): boolean
export function envVal(val: 'no' | 'off' | 'false' | 'disabled'): false
export function envVal(val: 'yes' | 'on' | 'true' | 'enabled'): true
export function envVal(val: '1'): 1
export function envVal(val: '0'): 0
export function envVal(val: number): number
export function envVal(val: string): string | number
export function envVal<T>(val: T): T
export function envVal(val)
{
	const t = typeof val;
	const s = String(val).toLowerCase().trim();

	if (t === 'boolean')
	{
		return val;
	}
	else if (t === 'undefined' || s === 'undefined')
	{
		return void(0);
	}
	else if (val === null || s === 'null')
	{
		return null;
	}
	else if (t === 'number')
	{
		return val;
	}

	if (t === 'string')
	{
		if (s === '1')
		{
			return 1;
		}
		else if (s === '0')
		{
			return 0;
		}
		else if (val === '')
		{
			return '';
		}
		else if (s === '')
		{
			return val;
		}
		else if (/^(?:yes|on|true|enabled)$/i.test(s))
		{
			return true;
		}
		else if (/^(?:no|off|false|disabled)$/i.test(s))
		{
			return false;
		}

		if (/^\-?[1-9]\d*(?:\.\d+)?$/i.test(s))
		{
			let n = Number(s);
			return Number.isNaN(n) ? val : n;
		}
	}

	return val
}

export function envBool(val: undefined | 'undefined'): undefined
export function envBool(val: null | 'null'): null
export function envBool(val: boolean): boolean
export function envBool(val: 'no' | 'off' | 'false' | 'disabled'): false
export function envBool(val: 'yes' | 'on' | 'true' | 'enabled'): true
export function envBool(val: '1'): 1
export function envBool(val: '0'): 0
export function envBool(val: number): number
export function envBool<T>(val: T, mode2: true): number | boolean
export function envBool<T>(val: T, mode2?: boolean): T | number | boolean
export function envBool(val, mode2: boolean = true)
{
	let v = envVal(val);

	if (mode2)
	{
		let t = typeof v;

		return (
			t === 'number'
			|| t === 'boolean'
		) ? v : false;
	}

	return typeof v === 'string' ? false : v;
}

export default envBool;

// @ts-ignore
exports = Object.assign(envBool, exports);

Object.defineProperty(exports, "__esModule", { value: true });
