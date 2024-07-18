const User = require('../model/user');

const users = [{
    "name": "Sergent Thiolier",
    "age": 30,
    "gender": "Male",
    "email": "sthiolier0@cnbc.com"
  }, {
    "name": "Brad Abbyss",
    "age": 19,
    "gender": "Male",
    "email": "babbyss1@wix.com"
  }, {
    "name": "Ferdy Doodney",
    "age": 26,
    "gender": "Male",
    "email": "fdoodney2@sitemeter.com"
  }, {
    "name": "Stephanie Conn",
    "age": 119,
    "gender": "Female",
    "email": "sconn3@technorati.com"
  }, {
    "name": "Zandra Steptowe",
    "age": 95,
    "gender": "Female",
    "email": "zsteptowe4@cloudflare.com"
  }, {
    "name": "Harlin Pinsent",
    "age": 18,
    "gender": "Male",
    "email": "hpinsent5@mozilla.com"
  }, {
    "name": "Washington Rizzetti",
    "age": 56,
    "gender": "Male",
    "email": "wrizzetti6@senate.gov"
  }, {
    "name": "Cointon Lace",
    "age": 37,
    "gender": "Male",
    "email": "clace7@newsvine.com"
  }, {
    "name": "Jenna Ratcliff",
    "age": 24,
    "gender": "Female",
    "email": "jratcliff8@qq.com"
  }, {
    "name": "Lancelot Waterstone",
    "age": 84,
    "gender": "Male",
    "email": "lwaterstone9@pbs.org"
  }, {
    "name": "Hinze Dunniom",
    "age": 55,
    "gender": "Male",
    "email": "hdunnioma@yale.edu"
  }, {
    "name": "Dee Croome",
    "age": 4,
    "gender": "Female",
    "email": "dcroomeb@nature.com"
  }, {
    "name": "Sasha Killingback",
    "age": 102,
    "gender": "Male",
    "email": "skillingbackc@xing.com"
  }, {
    "name": "Shaughn Checcuzzi",
    "age": 116,
    "gender": "Male",
    "email": "scheccuzzid@amazon.co.jp"
  }, {
    "name": "Price Brockhouse",
    "age": 23,
    "gender": "Male",
    "email": "pbrockhousee@microsoft.com"
  }, {
    "name": "Mireielle McKinlay",
    "age": 88,
    "gender": "Female",
    "email": "mmckinlayf@edublogs.org"
  }, {
    "name": "Berke Snook",
    "age": 20,
    "gender": "Male",
    "email": "bsnookg@posterous.com"
  }, {
    "name": "Millard Checchi",
    "age": 71,
    "gender": "Male",
    "email": "mchecchih@nifty.com"
  }, {
    "name": "Jamil Stearley",
    "age": 49,
    "gender": "Male",
    "email": "jstearleyi@nydailynews.com"
  }, {
    "name": "Chaddie Quipp",
    "age": 99,
    "gender": "Male",
    "email": "cquippj@blogtalkradio.com"
  }];
  

  const createUser = async () => {

    const user = {
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        email: 'johndoe@example.com'
    }
    try {
        // Use User.create to create multiple users at once if 'users' is an array of user objects
        const newUsers = await User.create(user);
        console.log(newUsers);
    } catch (error) {
        console.log({ error: error.message });
    }
};

const createMany = async(users) => {
    try {
        const newUsers = await User.insertMany(users);
        console.log(newUsers);
        console.log('Users created successfully');
        
    } catch (error) {
        console.log({ error: error.message });
    }
}

const deleteUser = async() => {

    try {
        const user = await User.findByIdAndDelete(id);

        if(!user) console.log({'error': 'User not found'});

        console.log({'success': `User ${user} deleted successfully`});
    } catch (error) {
        console.log({'error': error.message})
    }
}

const getUsers = async() => {
    try {
        const users = await User.find({});

        if(!users) console.log(`No users exist`);

        console.log(users);
    } catch (error) {
        console.log({'error': error.message})
    }
}

const updateUser = async() => {
    try {
        const user = await User.findByIdAndUpdate(id, { $set: { age: 25 } }, { new: true });
         console.log(user);
}catch(err){
    console.error(err);
};}

module.exports = {
    createUser,
    deleteUser,
    getUsers, updateUser,createMany
}
