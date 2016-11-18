describe('left', function(){
      it('should exist', function() {
        expect(left).toEqual(jasmine.any(String));
      })
      it('should equal right', function() {
        expect(left).toEqual('right');
      })
    })

describe('todayIWillCode', function() {
      it('should exist', function() {
        expect(todayIWillCode).toEqual(jasmine.any(String))
      })
      it('should say \'Today I will code!!!\'', function() {
        expect(todayIWillCode).toEqual('Today I will code!!!')
      })
    })

describe('Urban', function() {
      it('should exist', function() {
        expect(Urban).toEqual(jasmine.any(Object));
      })
      it('should have the right properties', function() {
        expect(Urban.height).toEqual('7ft');
        expect(Urban.age).toEqual(83);
        expect(Urban.shirt).toEqual(jasmine.any(Object));
        expect(Urban.shirt.color).toEqual('turquoise');
        expect(Urban.shirt.size).toEqual('M');
        expect(Urban.likes).toEqual(jasmine.any(Array));
        expect(Urban.likes).toContain('Incredible Granite Shoes', 'Fantastic Frozen Shirt', 'Handmade Plastic Sausages');
      })
    })

describe('myShirt', function() {
  it('should exist', function() {
    expect(myShirt).toEqual(jasmine.any(Object))
    expect(myOtherShirt).toEqual(jasmine.any(Object));
  })

  it('should have the right values', function() {
    expect(myShirt.type).toEqual('polyester');
    expect(myShirt.color).toEqual('tan');

    expect(myOtherShirt.type).toEqual('cotton');
    expect(myOtherShirt.color).toEqual('tan');
  })
})

describe('zoo', function() {
  it('should exist', function(){
    expect(zoo).toEqual(jasmine.any(Object));
  })
  it('should have capybaras property', function () {
			expect(zoo.hasOwnProperty('capybaras')).toEqual(true);
	})
	it('should have sloths property', function () {
		expect(zoo.hasOwnProperty('sloths')).toEqual(true);
	})

	it('should have mules property', function () {
		expect(zoo.hasOwnProperty('mules')).toEqual(true);
	})

	it('should count the animals correctly', function () {
		expect(zoo.capybaras).toEqual(14)
		expect(zoo.sloths).toEqual(77)
		expect(zoo.mules).toEqual(53);
	})
})

describe('kinesthesia', function() {
  it('should exist', function() {
    expect(kinesthesia).toEqual(jasmine.any(Object));
  })
  it('should have 5 properties', function() {
    var count = 0;
    for (var prop in kinesthesia) count++;

    expect(count).toEqual(5);
  })
  it('should change properties that start with \'t\'', function() {
    for (var prop in kinesthesia) {
      if (prop.match(/^t/)) {
        expect(kinesthesia[prop]).toEqual('t')
      }
    }
  })
})

describe('rainbowColors', function() {
  it('should exist', function() {
    expect(rainbowColors).toEqual(jasmine.any(Array));
  })
  it('should have the right values', function() {
    expect(rainbowColors.sort()).toEqual(['red','orange','yellow','green','blue','indigo','violet',].sort());
  })
})

	describe('heroes', function () {
		it('should add \'Kim\' to the end', function () {
			expect(heroes[heroes.length - 1]).toEqual('Kim');
		})
		it('should remove \'Marauders\' and store him in a variable', function () {
			expect(firstHero).toEqual('Marauders');
		})
		it('should add \'Spellbinder\' to the start of the array', function () {
			expect(heroes[0]).toEqual('Spellbinder');
		})

		it('should copy Hellfire Club from the array and store him in a variable', function () {
			expect(thirdHero).toEqual('Hellfire Club');
			expect(heroes.indexOf('Hellfire Club') > 0).toEqual(true);
		})
	})

describe('addItem', function () {
		it('should exist', function () {
			expect(addItem).toBeDefined();
		})
		it('should add an item', function () {
			expect(addItem(["tsubo", "conal", "saddhus"], "aporphine")).toEqual(["tsubo", "conal", "saddhus", "aporphine"]);
			expect(addItem(["tsubo", "tsubo", "tsubo"], "aporphine")).toEqual(["tsubo", "tsubo", "tsubo", "aporphine"]);
			expect(addItem(["tsubo", "conal", "saddhus"], "unrevolutionized")).toEqual(["tsubo", "conal", "saddhus", "unrevolutionized"]);
		})
	})


    describe('nonuple the fun', function() {
      it('should exist', function() {
        expect(nonupleTheFun).toBeDefined();
      })
      it('should nonuple strings', function() {
        expect(nonupleTheFun('A')).toEqual('AAAAAAAAA');
        expect(nonupleTheFun('nonuple')).toEqual('nonuplenonuplenonuplenonuplenonuplenonuplenonuplenonuplenonuple')
        expect(nonupleTheFun('SuchFun')).toEqual('SuchFunSuchFunSuchFunSuchFunSuchFunSuchFunSuchFunSuchFunSuchFun');

      })
      it('should nonuple numbers', function() {
        expect(nonupleTheFun(2)).toEqual(18);
        expect(nonupleTheFun(4)).toEqual(36);
        expect(nonupleTheFun(3.5)).toEqual(31.5);
      })
      it('should nonuple numbers pretending to be strings', function() {
        expect(nonupleTheFun("1")).toEqual(9);
        expect(nonupleTheFun("2.5")).toEqual(22.5);
        expect(nonupleTheFun("4")).toEqual(36);
      });
    });


    describe('spiderTest', function () {
  		it('should exist', function () {
  			expect(spiderTest).toBeDefined();
  		});

  		it('accurately rates Andrew Garfield\'s spiderman', function () {
  			var actor = { name: 'Andrew Garfield' };
  			spiderTest(actor);

  			expect(actor.spiderRating).toEqual(10);
  		});

  		it('undervalues Tobey Maguire', function () {
  			var actor = { name: 'Tobey Maguire' };
  			spiderTest(actor);

  			expect(actor.spiderRating).toEqual(0);
  		});

  		it('recognizes Jeremy is not spiderman', function () {
  			var actor = { name: 'Jeremy' };
  			spiderTest(actor);

  			expect(actor.spiderRating.toLowerCase()).toEqual('not a spiderman');
  		});
  	});



	describe('whatIsItOutside', function () {
		it('should exist', function () {
			expect(whatIsItOutside).toBeDefined();
		});

		it('should warn me I will be sweaty', function () {
			var res = whatIsItOutside(86, 46);

			expect(res).toEqual("I'm all sweat");
		});

		it('should say something silly about icicles', function () {
			var res = whatIsItOutside(10, 0, 90);

			expect(res).toEqual("I have icicles");
		});

		it('should inform me I am in the desert', function () {
			var res = whatIsItOutside(86, 44, 19);

			expect(res).toEqual("I'm literally in the desert");
		});

		it('should make me hesitate about life choices - hot', function () {
      expect(whatIsItOutside(91, 20, 45)).toEqual("Hmm, probably not");
		});

		it('should make me hesitate about life choices - humid', function () {
      expect(whatIsItOutside(80, 56, 45)).toEqual("Hmm, probably not");
		});

		it('should make me hesitate about life choices - cloudy', function () {
      expect(whatIsItOutside(80, 20, 66)).toEqual("Hmm, probably not");
		});

		it('should encourage me to go whatIsItOutside', function () {
			expect(whatIsItOutside(79, 20, 45)).toEqual("I love outside");
		});
	});


    describe('callerBack', function () {
		it('should exist', function () {
			expect(callerBack).toBeDefined();
		});
		it('should call me back', function () {
			var called = false;
			function callback(ret) {
				called = true;
			}

			callerBack(callback, "Hey!");

			expect(called).toBeTruthy();
		});
		it('should call me back with the right message', function () {
			var calledMsg = "";
			function callback(ret) {
				calledMsg = ret;
			}

      callerBack(callback, "Hey!");
			expect(calledMsg).toBe('Hey! back');
		});
	});


        describe('clockIn', function () {
      it('should exist', function () {
        expect(clockIn).toBeDefined();
      });
      it('should make chat message object', function () {
        expect(clockIn("Elon Musk", "CEO").name).toEqual("Elon Musk");
        expect(clockIn("Elon Musk", "CEO").department).toEqual("CEO");
        expect(clockIn("Elon Musk", "CEO").timestamp).toEqual(new Date());
      });
    });
    

