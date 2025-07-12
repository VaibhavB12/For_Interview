db.persons.aggregate([ 
    { $match: { gender: "female" } },
    { $group: { _id: { state: '$location.state' }, 
                totalPersons: { $sum: 1 } 
                } 
            },
    { $sort: { totalPersons: -1 } }
]).pretty()


db.persons.aggregate([
    { $match: { gender: 'female' }},
    { $group: { _id: { state: '$location.state'}, totalPersons}}

])



mongoimport --uri " mongodb+srv://vaibhanikalje:z5Yb7W0MVkPsd1hv@cluster0.r413wgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" "--file "159 persons.json" --jsonArray


mongodb+srv://vaibhanikalje:z5Yb7W0MVkPsd1hv@cluster0.r413wgz.mongodb.net/analytics?retryWrites=true&w=majority&appName=Cluster0


Syntax :
db.collection.aggregate([
    { <stage1>: { <field1>: <expression>, <field2>: <expression> } },
    { <stage2>: { <field1>: <expression>, <field2>: <expression> } },
    ...
]);



db.persons.aggregate([ {}, {}, {}])  // how many stage needed one {} per stage
// stage : { $stageName: {}}
([{ $stageName: {}}, { $stageName: {}}, { $stageName: {}}])
db.persons.aggregate([ { $match: { gender: 'female'}}, {}, {}]) 

using $ with a field name means you’re referencing the field’s value. When you rename or alias a field name - newName: {'$fieldName'}

db.persons.aggregate([{ $project: {_id: 0, gender: 1, fullName: { $concat: ['$name.first',' ', '$name.last']}}}])

db.persons.aggregate([{ $project: {_id: 0, gender: 1, fullName: { $concat: [{$toUpper: '$name.first'}, '', {$toUpper: '$name.last'}]}}}])
// aggregate method returns an array or list
// if you want to exclude _id field in results (project) then do it in first project stage not in later project stage




===========================================================================================================================
Steps :
db.persons.aggregate([ { $project: { _id: 0, gender: 1, fullName: { $concat: ['$name.first', '', '$name.last']}}} ]).pretty()

db.persons.aggregate([
  { 
    $project: { 
      _id: 0, 
      gender: 1, 
      fullName: { 
        $concat: [ "$name.first", " ", "$name.last" ] 
      } 
    } 
  }
]).pretty();


db.persons.aggregate([
  { 
    $project: { 
      _id: 0, 
      gender: 1, 
      fullName: { 
        $concat: [ {$toUpper: '$name.first'}, " ", {$toUpper: '$name.last'} ] 
      } 
    } 
  }
]).pretty();

db.persons.aggregate([
    { 
      $project: { 
        _id: 0, 
        gender: 1, 
        fullName: { 
          $concat: [ {$toUpper: { $substrCP: ['$name.first', 0, 1]}}, " ", {$toUpper: { $substrCP: ['$name.first', 0, 1]}} ] 
        } 
      } 
    }
  ]).pretty();

db.persons.aggregate([
  { 
    $project: { 
      _id: 0, 
      gender: 1, 
      fullName: { 
        $concat: [ 
          { $toUpper: { $substrCP: [ "$name.first", 0, 1 ] } }, 
          { $substrCP: [ "$name.first", 1, { $subtract: [ { $strLenCP: "$name.first" }, 1 ] } ] }, 
          " ", 
          { $toUpper: { $substrCP: [ "$name.last", 0, 1 ] } }, 
          { $substrCP: [ "$name.last", 1, { $subtract: [ { $strLenCP: "$name.last" }, 1 ] } ] }
        ] 
      } 
    } 
  }
]).pretty();

===========================================================================================================================

db.persons.aggregate([
    { $project: { 
        _id:0, 
        name: 1, 
        email: 1, 
        location: { 
            type: 'Point', 
            coordinates: [
                '$location.coordinates.longitude',
                '$location.coordinates.latitude'
            ]
            }
        }
    }
])

We get longitude & latitude but they are in string format so we have to convert them using $convert operator. $convert has 4 parameters : 1.input : value to be converted 2.to : the data type you want to convert to 3.onError 4.onNull are default values returned if transformation fails 

db.persons.aggregate([
    { $project: { 
        _id:0, 
        name: 1, 
        email: 1, 
        location: { 
            type: 'Point', 
            coordinates: [
                { $convert: { input: '$location.coordinates.longitude', to: 'double', onError: 0.0, onNull: 0.0}},
                { $convert: { input: '$location.coordinates.latitude', to: 'double', onError: 0.0, onNull: 0.0}}
            ]
            }
        }
    }
])

We see in output : coordinates are not strings they are converted to numbers

db.persons.aggregate([
  { 
    $project: { 
      _id: 0, 
      name: 1, 
      email: 1, 
      birthdate: '$dob.date',
      age: '$dob.age',
      location: { 
        type: "Point", 
        coordinates: [
          { 
            $convert: { 
              input: "$location.coordinates.longitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          },
          { 
            $convert: { 
              input: "$location.coordinates.latitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          }
        ]
      }
    }
  }
]);

birthdate: '$dob.date' Vs birthdate: {'$dob.date'}
birthdate: {'$dob.date'} is incorrect because when referencing a field from a document, you use a string prefixed with $. birthdate {'$dob.date'} is incorrect because it tries to define an object instead of referencing a field from a document

Use $convert to convert birthdate from ISO 8601 standard to mongodb ISO date format
db.persons.aggregate([
  { 
    $project: { 
      _id: 0, 
      name: 1, 
      email: 1, 
      birthdate: { $convert: { input: '$dob.date', to: 'date'}},
      age: '$dob.age',
      location: { 
        type: "Point", 
        coordinates: [
          { 
            $convert: { 
              input: "$location.coordinates.longitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          },
          { 
            $convert: { 
              input: "$location.coordinates.latitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          }
        ]
      }
    }
  }
]);

Instead of using $convert you can use $toDate if you dont need onError & onNull

db.persons.aggregate([
  { 
    $project: { 
      _id: 0, 
      name: 1, 
      email: 1, 
      birthdate: { $toDate: '$dob.date'},
      age: '$dob.age',
      location: { 
        type: "Point", 
        coordinates: [
          { 
            $convert: { 
              input: "$location.coordinates.longitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          },
          { 
            $convert: { 
              input: "$location.coordinates.latitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          }
        ]
      }
    }
  }
]);  

First you restructure your data using match or project stages & then you group the data
So we are going to add grouping on derived data in these two stages. We are gonna group by the birthdate. $isoWeekYear operator retrieves year out of the date.
db.persons.aggregate([
  { 
    $project: { 
      _id: 0, 
      name: 1, 
      email: 1, 
      birthdate: { $toDate: '$dob.date'},
      gender: 1,
      age: '$dob.age',
      location: { 
        type: "Point", 
        coordinates: [
          { 
            $convert: { 
              input: "$location.coordinates.longitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          },
          { 
            $convert: { 
              input: "$location.coordinates.latitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          }
        ]
      }
    }
  },
  { 
    $project: { 
      gender: 1, 
      email: 1,
      location: 1,
      birthdate: 1,
      age: 1,
      fullName: { 
        $concat: [ 
          { $toUpper: { $substrCP: [ "$name.first", 0, 1 ] } }, 
          { $substrCP: [ "$name.first", 1, { $subtract: [ { $strLenCP: "$name.first" }, 1 ] } ] }, 
          " ", 
          { $toUpper: { $substrCP: [ "$name.last", 0, 1 ] } }, 
          { $substrCP: [ "$name.last", 1, { $subtract: [ { $strLenCP: "$name.last" }, 1 ] } ] }
        ] 
      } 
    } 
  },
  { 
    $group: { 
      _id: { birthYear: { $isoWeekYear: '$birthdate' } },  // ✅ Fixed
      numPersons: { $sum: 1 } 
    } 
  }
]).pretty()



db.persons.aggregate([
  { 
    $project: { 
      _id: 0, 
      name: 1, 
      email: 1, 
      birthdate: { $toDate: '$dob.date'},
      gender: 1,
      age: '$dob.age',
      location: { 
        type: "Point", 
        coordinates: [
          { 
            $convert: { 
              input: "$location.coordinates.longitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          },
          { 
            $convert: { 
              input: "$location.coordinates.latitude", 
              to: "double", 
              onError: 0.0, 
              onNull: 0.0 
            } 
          }
        ]
      }
    }
  },
  { 
    $project: { 
      gender: 1, 
      email: 1,
      location: 1,
      birthdate: 1,
      age: 1,
      fullName: { 
        $concat: [ 
          { $toUpper: { $substrCP: [ "$name.first", 0, 1 ] } }, 
          { $substrCP: [ "$name.first", 1, { $subtract: [ { $strLenCP: "$name.first" }, 1 ] } ] }, 
          " ", 
          { $toUpper: { $substrCP: [ "$name.last", 0, 1 ] } }, 
          { $substrCP: [ "$name.last", 1, { $subtract: [ { $strLenCP: "$name.last" }, 1 ] } ] }
        ] 
      } 
    } 
  },
  { 
    $group: { 
      _id: { birthYear: { $isoWeekYear: '$birthdate' } },  
      numPersons: { $sum: 1 } 
    } 
  },
  { $sort: { numPersons: -1}}
]).pretty()

Pushing elements into new array : 
db.friends.aggregate([ { $group: { _id: { userAge: "$age" }, allHobbies: { $push: "$hobbies"} } }] )
this will push hobbies array into a new array name allHobbies, so finally we get array of array. We could push other fields also into array using $push operator like age or name. It is not necessory that we push array only.

But what if we want to pull out elements from the array & use them in pipeline stages. To achieve this we use $unwind stage which create a seperate document for each element in the array.
$group Vs $unwind :
$group: Merges multiple documents into fewer documents based on _id.
  If documents have the same _id, they are merged into one.
  If _id values are different, multiple grouped documents are returned.
  🔹 Result: Fewer or the same number of documents as input.
$unwind: Splits an array inside a document into multiple documents.
  Each array element becomes a separate document.
  🔹 Result: More documents than input.

db.friends.aggregate([ { $unwind: "$hobbies" }] )

db.friends.aggregate([{ $unwind: '$hobbies'}, {$group: {_id: {userAge: '$age'}, allHobbies: {$push: " $hobbies" }}}])
Now we get array of allHobbies instead of getting array of array in previous stage coz we have used $unwind in previous stage & then $group.
In above results we are getting duplicate values in one of the array. To avoid this we can use $addToSet which does not allow duplicate values gives only unique values.
db.friends.aggregate([{ $unwind: '$hobbies'}, {$group: {_id: {userAge: '$age'}, allHobbies: {$addToSet: " $hobbies" }}}])
If $addToSet finds any duplicate value it does not push it into the array, it ignore that duplicate value.

The $slice operator returns a portion of an array. It takes an array as the first parameter (which can be a field or a hardcoded array) and an integer as the second parameter, specifying the number of elements to extract from the beginning of the array.

db.friends.aggregate([ { $project: { _id: 0, name: 1, examScore: { $slice: ["$examScores", 1] } } }])
We get first examScore per user from this query, means it will extract only first element of examScores array & return it.
To get last 2 scores use -2 :
db.friends.aggregate([ { $project: { _id: 0, name: 1, examScore: { $slice: ["$examScores", -2] } } }])
To get one element but starting at the 2nd element of an array : 2, 1
db.friends.aggregate([ { $project: { _id: 0, name: 1, examScore: { $slice: ["$examScores", 2, 1] } } }])
Starts at position 2 & give one element

Get length of array : how many exams each friend gave 
db.friends.aggregate([ { $project: { _id: 0, student: "$name", numberOfExams: { $size: "$examScores" } } }] )

$$filter function takes 3 arguments : 
  1.input → The array to iterate over.
  2.as → A temporary variable that holds the current element in each iteration.
  3.cond → A condition that determines which elements to include in the output.
$filter iterates over each element in the given array (input), storing the current element in a temporary variable (as) during each iteration. To access this temporary variable in the condition we use '$$as'.

To get names of students or friends which got scores greater than 60 :
db.friends.aggregate([ { $project: { _id: 0, studentName: '$name', scoresGreaterThan60: { $filter: { input: "$exam Scores", as: 'sc', cond: { $gt: ['$$sc.score', 60] } } } } }] )
Here, sc is holding the entire object for each iteration, so we need to use $$sc.score to access the score field inside that object.

Summary : 1.if we have array of objects use : '$$temporaryVariable.objectKey'
          2.if we have only array use : '$$temporaryVariable' 

To get the highest exam score by each friend or student :
$unwind only work on a top-level array field does not work directly on nested arrays (array of arrays) or array of objects.
we cant $unwind array of objects directly : like { $unwind: '$examScores.score'} it does not show any result 
Must use only array at the $unwind stage. 
Steps : $unwind, $project, $sort, $group (with $max)
Transformation Steps :
  db.friends.aggregate([ { $unwind: '$examScores' }] )
  db.friends.aggregate([{ $unwind: '$examScores' }, { $project: { _id: 1, name: 1, age: 1, score: '$examScores.score' } }] )
  db.friends.aggregate([{ $unwind: '$examScores' }, { $project: { _id: 1, name: 1, age: 1, score: '$examScores.score' } }, { $sort: { score: -1 } }])
  db.friends.aggregate([{ $unwind: '$examScores' }, { $project: { _id: 1, name: 1, age: 1, score: '$examScores.score' } }, { $sort: { score: -1 } }, { $group: {_id: '$_id', name: { $first: '$name'}, maxScore: {$max: '$score'}}}])
  db.friends.aggregate([{ $unwind: '$examScores' }, { $project: { _id: 1, name: 1, age: 1, score: '$examScores.score' } }, { $sort: { score: -1 } }, { $group: { _id: '$_id', name: { $first: '$name' }, maxScore: { $max: '$score' } } }, { $sort: { maxScore: -1 } }] )

$bucket stage create groups of documents based on boundries we define. It takes 3 parameters :
1.groupBy → The field to group documents by.
2.boundaries → An array that defines bucket limits (must be sorted).
3.output → Specifies the fields to include in each bucket (e.g., count, average, sum).
It creates _id based on values we provide in boundaries, If no documents fall within a defined boundary range, that bucket is skipped in the output.
$bucketAuto stage automatically groups documents. We only need to specify the number of buckets using the buckets parameter.
1.groupBy → The field to group documents by.
2.buckets → The number of buckets to create (MongoDB will automatically determine the ranges).
3.output → Specifies the fields to include in each bucket (e.g., count, average, sum).
It creates object for _id which contains min & max range automatically determined based on the data distribution.
$bucket :
db.persons.aggregate([ { $bucket: { groupBy: '$dob.age', boundaries: [18, 30, 40, 50, 60, 120], output: { numPersons: { $sum: 1 }, averageAge: { $avg: '$dob.age' } } } }] )
$$bucketAuto : 
db.persons.aggregate([ { $bucketAuto: { groupBy: '$dob.age', buckets: 5, output: { numPersons: { $sum: 1 }, averageAge: { $avg: '$dob.age' } } } }] )

To find 10 persons with oldest birth date then after we wanna find next 10 oldest person & so on... :
The order of $sort, $skip & $limit matters in pipeline (it does not matter in find method), the order is :
  1.$sort → Sorts documents first to ensure correct order.
  2.$skip → Skips a certain number of documents.
  3.$limit → Restricts the number of documents returned.
The order is importanta because : Sorting first ensures that the documents are arranged correctly before skipping or limiting. Skipping before limiting ensures that the correct range of documents is returned.
Before these stages : use $match or $project stages 
Final order : $match - $project - $sort - $skip - $limit
  db.persons.aggregate([ { $project: { _id: 0, name: { $concat: ['$name.first', ' ', '$name.last'] }, birthDate: { toDate: '$dob.date' } } }] )
  db.persons.aggregate([ { $project: { _id: 0, name: { $concat: ['$name.first', ' ', '$name.last'] }, birthDate: { toDate: '$dob.date' } } }] )
  db.persons.aggregate([{ $project: { _id: 0, name: { $concat: ['$name.first', ' ', '$name.last'] }, birthDate: { toDate: '$dob.date' } } }, { $sort: { birthDate: 1 } }, { $skip: 10 }, { $limit: 10 }] ).pretty()

$out : take result of the pipeline & write it to a new collection. { $out: 'collectionName'}
db.persons.aggregate([{ $project: { _id: 0, name: { $concat: ['$name.first', ' ', '$name.last'] }, birthDate: { toDate: '$dob.date' } } }, { $sort: { birthDate: 1 } }, { $skip: 10 }, { $limit: 10 }, {$out: 'topTenOldest'}
show collections;  You see new collection name topTenOldest

$geoNear : it allows you to find documents in our collection which are close to specified location (location that we specify in $geoNear stage configuration). $geoNear must be the first stage in the aggregation pipeline and requires a 2dsphere index on the location field.
parameters of $geoNear :
1.near : The reference point to find nearby documents. Must be in GeoJSON format ({ type: "Point", coordinates: [lng, lat] }).
2.distanceField	: The field where the calculated distance (in meters) will be stored.
3.maxDistance	(Optional) : The maximum distance (in meters) from near to return documents.
4.minDistance	(Optional) : The minimum distance (in meters) from near to return documents.
5.query	(Optional) : Additional filtering criteria (e.g., category, status, etc.).
6.spherical	true (default) : → Uses spherical calculations. Must be true for 2dsphere indexes.
Steps :
First run 179 commands-15.js pipeline which creates transformedPersons collection then create index on transformedPersons :
To use geoNear stage we must create 2dsphere index on collection first
db.transformedPersons.createIndex({ location: "2dsphere" });


Renaming _id field in $group stage :
  {$group: {_id: { newFieldName: '$fieldName'}, sex: '$gender'}}
Renaming with using operator (expression): 
  {$project : { newFieldName: { $operator: '$fieldName'}}}
Renaming a field directly in the $project stage automatically includes that field in the output. You dont need to mention 0 or 1 to exclude or include.


renaming or aliasing if _id field in group stage is different that other fields renaming or aliasing :
aliasing in MongoDB aggregation: 
1.Direct Field Reference (Single Value) :
{
  _id: { aliasName: "$fieldName" }
}

2.Aggregation Operator (Multiple Values) :
{
  _id: { aliasName: "$fieldName" },
  newFieldName: { $aggregationOperator: "$existingFieldName" }
}
