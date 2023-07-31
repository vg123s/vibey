const createUserProviderSchema = {
  name: {
    in: ['body'],
    isLength: {
      errorMessage: 'Name must be at least 2 characters long',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },

  email: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/@.*\.com$/.test(value)) {
          throw new Error('Invalid email format');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
  },

  image: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/\.(png|jpg|jpeg)$/.test(value)) {
          throw new Error('Image must have a valid extension png, jpg, jpeg');
        }
        return true;
      },
    },
    optional: true,
  },
  bio: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid bio',
    },
    optional: true,
  },
  role: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid role value',
    },
    optional: true,
  },
  socials: {
    in: ['body'],
    isArray: {
      errorMessage: 'Socials must be an array',
    },
    optional: true,
  },
  'social.*.name': {
    isString: {
      errorMessage: 'Invalid name in socials',
    },
    optional: true,
  },
  'social.*.link': {
    isURL: {
      errorMessage: 'Invalid link in socials',
    },
    optional: true,
  },
};
const createUserSchema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 2 },
      errorMessage: 'Name must be at least 2 characters long',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },

  email: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/@.*\.com$/.test(value)) {
          throw new Error('Invalid email format');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
  },
  password: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}/.test(value)) {
          throw new Error(
            'Password must contain at least one alphabet, one number, one special character, and be minimum 6 characters long'
          );
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'password cannot be empty',
    },
  },
  image: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/\.(png|jpg|jpeg)$/.test(value)) {
          throw new Error('Image must have a valid extension png, jpg, jpeg');
        }
        return true;
      },
    },
    optional: true,
  },
  bio: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid bio',
    },
    optional: true,
  },
  role: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid role value',
    },
    optional: true,
    // notEmpty: {
    //   errorMessage: 'Role cannot be empty',
    // },
  },
  socials: {
    in: ['body'],
    isArray: {
      errorMessage: 'Socials must be an array',
    },
    optional: true,
  },
  'social.*.name': {
    isString: {
      errorMessage: 'Invalid name in socials',
    },
    optional: true,
  },
  'social.*.link': {
    isURL: {
      errorMessage: 'Invalid link in socials',
    },
    optional: true,
  },
};

const loginUserSchema = {
  email: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/@.*\.com$/.test(value)) {
          throw new Error('Invalid email');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Email cannot be empty',
    },
  },
  password: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}/.test(value)) {
          throw new Error(
            'Password must contain at least one alphabet, one number, one special character, and be minimum 6 characters long'
          );
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'password cannot be empty',
    },
  },
};

const idSchema = {
  id: {
    in: ['params'],
    isString: {
      errorMessage: 'Invalid id',
    },
    notEmpty: {
      errorMessage: 'id cannot be empty',
    },
  },
};

const slugSchema = {
  slug: {
    in: ['params'],
    isString: {
      errorMessage: 'Invalid slug',
    },
    notEmpty: {
      errorMessage: 'Slug cannot be empty',
    },
  },
};
// body("age", "Invalid age")
//     .optional({ values: "falsy" })
//     .isISO8601()
//     .toDate(),
//   // …
const createSchema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 2 },
      errorMessage: 'Name must be at least 2 characters long',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },
  slug: { in: ['body'], isString: true, notEmpty: true },
  organizer: { in: ['body'], isString: true, notEmpty: true },
  description: { in: ['body'], isString: true, notEmpty: true },

  address: {
    in: ['body'],
    isObject: true,
    notEmpty: {
      errorMessage: 'address cannot be empty',
    },
  },
  'address.*.isOnline': {
    in: ['body'],
    isBoolean: {
      errorMessage: 'Invalid value for isOnline',
    },
    notEmpty: {
      errorMessage: 'isOnline cannot be empty',
    },
  },
  'address.*.location': {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid location value',
    },
    notEmpty: {
      errorMessage: 'location cannot be empty',
    },
  },
  // image: {
  //   in: ['body'],
  //   // custom: {
  //   //   options: (value) => {
  //   //     if (!/\.(png|jpg|jpeg)$/.test(value)) {
  //   //       throw new Error('Image must have a valid extension png, jpg, jpeg');
  //   //     }
  //   //     return true;
  //   //   },
  //   // },
  //   isString: {
  //     errorMessage: 'Invalid image',
  //   },
  //   // isURL: {
  //   //   errorMessage: 'Invalid URL',
  //   // },
  //   notEmpty: {
  //     errorMessage: 'image cannot be empty',
  //   },
  // },
  date: {
    in: ['body'],
    isDate: {
      errorMessage: 'Invalid date value',
    },
    notEmpty: {
      errorMessage: 'date cannot be empty',
    },
  },
  duration: {
    in: ['body'],
    isNumeric: {
      errorMessage: 'Invalid duration value',
    },
    notEmpty: {
      errorMessage: 'duration cannot be empty',
    },
  },
  tags: {
    in: ['body'],
    custom: {
      options: (value) => {
        // console.log("console.log",value,Array.isArray(JSON.parse(value)))
        if (Array.isArray(value)) {
          // console.log("oh yessss array")
          // throw new Error('Invalid email format');
        }
        return true;
      },
      // isArray: true, notEmpty: true
      // isArray: {
      //   errorMessage: 'Tags must be an array',
      //   options: { min: 1 },
      // },
      notEmpty: {
        errorMessage: 'Tags array must not be empty',
      },
    },
  },
  // tags: {
  //   in: ['body'],
  //   // isArray: true, notEmpty: true
  //   isArray: {
  //     errorMessage: 'Tags must be an array',
  //     options: { min: 1 },
  //   },
  //   notEmpty: {
  //     errorMessage: 'Tags array must not be empty',
  //   },
  // },
};

const deleteSchema = {
  id: {
    in: ['body'],
    isString: true,
    optional: true,
  },
};

export const validationSchema = {
  createUserProviderSchema,
  createUserSchema,
  loginUserSchema,
  idSchema,
  slugSchema,
  createSchema,
  deleteSchema,
};
