describe('Call all', function () {

	it('takes an object and an array and returns an array', function () {
		var result = callAll({}, [function () {}]);
		expect(result).toEqual(jasmine.any(Array));
	});

	it('calls all of the functions in the array', function () {

		/* NOTE: jasmine.creteSpy() creates a function, it is similar to
			var fnArr = [function one() {return 1},
						 function two() {return 2}
						];
		*/


		var fnArr = [
			jasmine.createSpy(), // first function 
			jasmine.createSpy() // second function
		];
		
		

		callAll({}, fnArr);
		expect(fnArr[0].calls.count()).toEqual(1);
		expect(fnArr[1].calls.count()).toEqual(1);

		callAll({}, fnArr);
		expect(fnArr[0].calls.count()).toEqual(2);
		expect(fnArr[1].calls.count()).toEqual(2);
	});

	it('calls each function using the object as the context', function () {
		var fnArr = [
			function () {
				this.win = true;
			},
			function () {
				this.lose = false;
			}
		];
		var obj = {};

		callAll(obj, fnArr);
		expect(obj.win).toEqual(true);
		expect(obj.lose).toEqual(false);
	});

	it('returns an array of each function\'s results, in order with strings', function () {
		var fnArr = [
			function firstName () {
				return this.first;
			},

			function lastName () {
				return this.last;
			}
		];
		var obj = {first: "Nimit", last: "Maru"};
		
		var result = callAll(obj, fnArr);
		expect(result).toEqual(["Nimit", "Maru"]);
	});

	it('returns an array of each function\'s results, in order with numbers', function () {
		var fnArr = [
			function () {
				return this.a + this.b;
			},
			function () {
				return this.a + this.c;
			},
			function () {
				return this.b + this.c;
			},
			function () {
				return this.a + this.b + this.c;
			}
		];
		var obj = {a: 1, b: 10, c: 100};

		var result = callAll(obj, fnArr);
		expect(result).toEqual([11, 101, 110, 111]);
	});

	it("detects if Function.prototype.call is used on each function in the function array", function(){
		spyOn(Function.prototype, 'call').and.callThrough();

		var obj = {};
		
		var fnArr = [
			function one () {
				return 1;
			},

			function two () {
				return 2;
			},

			function three () {
				return 3;
			}
		];

		callAll(obj, fnArr);

		expect(Function.prototype.call).toHaveBeenCalledWith(obj);
	});

});
