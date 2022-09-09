/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/services/db-add-user.ts":
/*!******************************************!*\
  !*** ./src/data/services/db-add-user.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DbAddUser = void 0;\nvar errors_1 = __webpack_require__(/*! @/presentation/errors */ \"./src/presentation/errors/index.ts\");\nvar DbAddUser = /** @class */ (function () {\n    function DbAddUser(repository, uuidGenerator, crypto) {\n        this.repository = repository;\n        this.uuidGenerator = uuidGenerator;\n        this.crypto = crypto;\n    }\n    DbAddUser.prototype.add = function (params) {\n        return __awaiter(this, void 0, Promise, function () {\n            var userData, hashPassword, id, user;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.repository.find({\n                            email: params.email,\n                        })];\n                    case 1:\n                        userData = _a.sent();\n                        if (userData) {\n                            return [2 /*return*/, new errors_1.RegistrationException(\"User already exists\")];\n                        }\n                        return [4 /*yield*/, this.crypto.encrypt(params.password)];\n                    case 2:\n                        hashPassword = _a.sent();\n                        id = this.uuidGenerator.generate();\n                        return [4 /*yield*/, this.repository.add(__assign(__assign({}, params), { id: id, password: hashPassword, created_at: new Date(), patients: [] }))];\n                    case 3:\n                        user = _a.sent();\n                        return [2 /*return*/, !!user];\n                }\n            });\n        });\n    };\n    return DbAddUser;\n}());\nexports.DbAddUser = DbAddUser;\n\n\n//# sourceURL=webpack://api-physiocare/./src/data/services/db-add-user.ts?");

/***/ }),

/***/ "./src/data/services/db-authentication.ts":
/*!************************************************!*\
  !*** ./src/data/services/db-authentication.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Authentication = void 0;\nvar errors_1 = __webpack_require__(/*! @/presentation/errors */ \"./src/presentation/errors/index.ts\");\nvar Authentication = /** @class */ (function () {\n    function Authentication(bcryptAdapter, jwtAdapter, authenticateUserRepo) {\n        this.bcryptAdapter = bcryptAdapter;\n        this.jwtAdapter = jwtAdapter;\n        this.authenticateUserRepo = authenticateUserRepo;\n    }\n    Authentication.prototype.signIn = function (params) {\n        return __awaiter(this, void 0, Promise, function () {\n            var user, encryptedPassword, verified, token;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.authenticateUserRepo.auth({\n                            email: params.email\n                        })];\n                    case 1:\n                        user = _a.sent();\n                        if (!user)\n                            return [2 /*return*/, new errors_1.NotFoundException('User not found')];\n                        encryptedPassword = user === null || user === void 0 ? void 0 : user.password;\n                        return [4 /*yield*/, this.bcryptAdapter.verify(params.password, encryptedPassword)];\n                    case 2:\n                        verified = _a.sent();\n                        if (verified) {\n                            token = this.jwtAdapter.generate();\n                            return [2 /*return*/, {\n                                    accessToken: token,\n                                }];\n                        }\n                        return [2 /*return*/, new errors_1.AuthenticationException('Email or password incorrect')];\n                }\n            });\n        });\n    };\n    return Authentication;\n}());\nexports.Authentication = Authentication;\n\n\n//# sourceURL=webpack://api-physiocare/./src/data/services/db-authentication.ts?");

/***/ }),

/***/ "./src/data/services/db-find-user.ts":
/*!*******************************************!*\
  !*** ./src/data/services/db-find-user.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FindUserService = void 0;\nvar FindUserService = /** @class */ (function () {\n    function FindUserService(repository) {\n        this.repository = repository;\n    }\n    FindUserService.prototype.find = function (params) {\n        return __awaiter(this, void 0, Promise, function () {\n            var user;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.repository.find({\n                            email: params.email,\n                        })];\n                    case 1:\n                        user = _a.sent();\n                        if (user !== undefined) {\n                            return [2 /*return*/, {\n                                    email: user.email\n                                }];\n                        }\n                        return [2 /*return*/, undefined];\n                }\n            });\n        });\n    };\n    return FindUserService;\n}());\nexports.FindUserService = FindUserService;\n\n\n//# sourceURL=webpack://api-physiocare/./src/data/services/db-find-user.ts?");

/***/ }),

/***/ "./src/data/services/index.ts":
/*!************************************!*\
  !*** ./src/data/services/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./db-add-user */ \"./src/data/services/db-add-user.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./db-find-user */ \"./src/data/services/db-find-user.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./db-authentication */ \"./src/data/services/db-authentication.ts\"), exports);\n\n\n//# sourceURL=webpack://api-physiocare/./src/data/services/index.ts?");

/***/ }),

/***/ "./src/domain/features/errors/registration-error.ts":
/*!**********************************************************!*\
  !*** ./src/domain/features/errors/registration-error.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AuthenticationException = void 0;\nvar AuthenticationException = /** @class */ (function (_super) {\n    __extends(AuthenticationException, _super);\n    function AuthenticationException(message) {\n        var _this = _super.call(this, message !== null && message !== void 0 ? message : 'Authentication failed') || this;\n        _this.name = 'AuthenticationException';\n        return _this;\n    }\n    return AuthenticationException;\n}(Error));\nexports.AuthenticationException = AuthenticationException;\n\n\n//# sourceURL=webpack://api-physiocare/./src/domain/features/errors/registration-error.ts?");

/***/ }),

/***/ "./src/infra/cryptography/bcrypt-adapter.ts":
/*!**************************************************!*\
  !*** ./src/infra/cryptography/bcrypt-adapter.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BcryptAdapter = void 0;\nvar bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nvar BcryptAdapter = /** @class */ (function () {\n    function BcryptAdapter(salt) {\n        this.salt = salt !== null && salt !== void 0 ? salt : 8;\n    }\n    BcryptAdapter.prototype.encrypt = function (plaintext) {\n        return __awaiter(this, void 0, Promise, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, (0, bcrypt_1.hash)(plaintext, this.salt)];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    BcryptAdapter.prototype.verify = function (plaintext, encrypted) {\n        return __awaiter(this, void 0, Promise, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, (0, bcrypt_1.compare)(plaintext, encrypted)];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    return BcryptAdapter;\n}());\nexports.BcryptAdapter = BcryptAdapter;\n\n\n//# sourceURL=webpack://api-physiocare/./src/infra/cryptography/bcrypt-adapter.ts?");

/***/ }),

/***/ "./src/infra/cryptography/index.ts":
/*!*****************************************!*\
  !*** ./src/infra/cryptography/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./bcrypt-adapter */ \"./src/infra/cryptography/bcrypt-adapter.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./jwt-adapter */ \"./src/infra/cryptography/jwt-adapter.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./uuid-generator */ \"./src/infra/cryptography/uuid-generator.ts\"), exports);\n\n\n//# sourceURL=webpack://api-physiocare/./src/infra/cryptography/index.ts?");

/***/ }),

/***/ "./src/infra/cryptography/jwt-adapter.ts":
/*!***********************************************!*\
  !*** ./src/infra/cryptography/jwt-adapter.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.JwtAdapter = void 0;\nvar jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar JwtAdapter = /** @class */ (function () {\n    function JwtAdapter(payload, secret, expiresIn) {\n        this.payload = payload;\n        this.secret = secret;\n        this.expiresIn = expiresIn;\n    }\n    JwtAdapter.prototype.generate = function () {\n        var _a;\n        var token = (0, jsonwebtoken_1.sign)(this.payload, this.secret, {\n            expiresIn: (_a = this.expiresIn) !== null && _a !== void 0 ? _a : \"1d\",\n        });\n        return token;\n    };\n    JwtAdapter.prototype.verify = function (token) {\n        return !!(0, jsonwebtoken_1.verify)(token, this.secret);\n    };\n    return JwtAdapter;\n}());\nexports.JwtAdapter = JwtAdapter;\n\n\n//# sourceURL=webpack://api-physiocare/./src/infra/cryptography/jwt-adapter.ts?");

/***/ }),

/***/ "./src/infra/cryptography/uuid-generator.ts":
/*!**************************************************!*\
  !*** ./src/infra/cryptography/uuid-generator.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UuidAdapter = void 0;\nvar uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nvar UuidAdapter = /** @class */ (function () {\n    function UuidAdapter() {\n    }\n    UuidAdapter.prototype.generate = function () {\n        var id = (0, uuid_1.v4)();\n        return id;\n    };\n    return UuidAdapter;\n}());\nexports.UuidAdapter = UuidAdapter;\n\n\n//# sourceURL=webpack://api-physiocare/./src/infra/cryptography/uuid-generator.ts?");

/***/ }),

/***/ "./src/infra/repos/prisma/user-prisma-repository.ts":
/*!**********************************************************!*\
  !*** ./src/infra/repos/prisma/user-prisma-repository.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserPrismaRepository = void 0;\nvar helpers_1 = __webpack_require__(/*! @/presentation/helpers */ \"./src/presentation/helpers/index.ts\");\nvar UserPrismaRepository = /** @class */ (function () {\n    function UserPrismaRepository() {\n    }\n    UserPrismaRepository.prototype.add = function (params) {\n        return __awaiter(this, void 0, Promise, function () {\n            var user;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, helpers_1.dbClient.user.create({\n                            data: __assign({}, params),\n                        })];\n                    case 1:\n                        user = _a.sent();\n                        return [2 /*return*/, !!user];\n                }\n            });\n        });\n    };\n    UserPrismaRepository.prototype.find = function (params) {\n        return __awaiter(this, void 0, Promise, function () {\n            var user;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, helpers_1.dbClient.user.findUnique({\n                            where: {\n                                email: params.email,\n                            },\n                            include: {\n                                patients: {\n                                    include: {\n                                        attendances: true,\n                                    },\n                                },\n                            },\n                        })];\n                    case 1:\n                        user = _a.sent();\n                        if (user)\n                            return [2 /*return*/, user];\n                        return [2 /*return*/, undefined];\n                }\n            });\n        });\n    };\n    UserPrismaRepository.prototype.auth = function (params) {\n        return __awaiter(this, void 0, Promise, function () {\n            var user;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, helpers_1.dbClient.user.findUnique({\n                            where: {\n                                email: params.email,\n                            },\n                        })];\n                    case 1:\n                        user = _a.sent();\n                        if (!user) {\n                            return [2 /*return*/, undefined];\n                        }\n                        return [2 /*return*/, { password: user.password }];\n                }\n            });\n        });\n    };\n    return UserPrismaRepository;\n}());\nexports.UserPrismaRepository = UserPrismaRepository;\n\n\n//# sourceURL=webpack://api-physiocare/./src/infra/repos/prisma/user-prisma-repository.ts?");

/***/ }),

/***/ "./src/infra/serverless/functions/add-account.ts":
/*!*******************************************************!*\
  !*** ./src/infra/serverless/functions/add-account.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handle = void 0;\nvar serverless_adapter_1 = __webpack_require__(/*! ../../../main/adapters/serverless-adapter */ \"./src/main/adapters/serverless-adapter.ts\");\nvar add_user_factory_1 = __webpack_require__(/*! ../../../main/factories/controllers/add-user-factory */ \"./src/main/factories/controllers/add-user-factory.ts\");\nvar handle = function (event, context) { return __awaiter(void 0, void 0, void 0, function () {\n    var controller, adapter;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                controller = (0, add_user_factory_1.AddUserFactory)();\n                return [4 /*yield*/, (0, serverless_adapter_1.serverlessAdapter)(controller, event, context)];\n            case 1:\n                adapter = _a.sent();\n                return [2 /*return*/, adapter];\n        }\n    });\n}); };\nexports.handle = handle;\n\n\n//# sourceURL=webpack://api-physiocare/./src/infra/serverless/functions/add-account.ts?");

/***/ }),

/***/ "./src/main/adapters/http-adapter.ts":
/*!*******************************************!*\
  !*** ./src/main/adapters/http-adapter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.httpAdapter = void 0;\nvar httpAdapter = function (httpResponse) {\n    var data;\n    if (httpResponse.data instanceof Error) {\n        data = {\n            statusCode: httpResponse.statusCode,\n            error: true,\n            message: httpResponse.data.message,\n        };\n    }\n    else {\n        data = {\n            statusCode: httpResponse.statusCode,\n            data: httpResponse.data,\n            error: false\n        };\n    }\n    return {\n        statusCode: httpResponse.statusCode,\n        body: JSON.stringify(data),\n        headers: { \"Content-Type\": \"application/json\" },\n    };\n};\nexports.httpAdapter = httpAdapter;\n\n\n//# sourceURL=webpack://api-physiocare/./src/main/adapters/http-adapter.ts?");

/***/ }),

/***/ "./src/main/adapters/serverless-adapter.ts":
/*!*************************************************!*\
  !*** ./src/main/adapters/serverless-adapter.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.serverlessAdapter = void 0;\nvar helpers_1 = __webpack_require__(/*! @/presentation/helpers */ \"./src/presentation/helpers/index.ts\");\nvar http_adapter_1 = __webpack_require__(/*! ./http-adapter */ \"./src/main/adapters/http-adapter.ts\");\nvar serverlessAdapter = function (controller, event, context) { return __awaiter(void 0, void 0, Promise, function () {\n    var body, headers, pathParameters, queryStringParameters, requestContext, parsedBody, response, err_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                body = event.body, headers = event.headers, pathParameters = event.pathParameters, queryStringParameters = event.queryStringParameters, requestContext = event.requestContext;\n                parsedBody = body ? JSON.parse(body) : undefined;\n                return [4 /*yield*/, controller.handle({\n                        body: parsedBody,\n                        headers: headers,\n                        pathParameters: pathParameters,\n                        queryStringParameters: queryStringParameters,\n                        // ...requestContext\n                    })];\n            case 1:\n                response = _a.sent();\n                return [2 /*return*/, (0, http_adapter_1.httpAdapter)(response)];\n            case 2:\n                err_1 = _a.sent();\n                console.log(err_1);\n                return [2 /*return*/, (0, http_adapter_1.httpAdapter)((0, helpers_1.serverError)())];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nexports.serverlessAdapter = serverlessAdapter;\n\n\n//# sourceURL=webpack://api-physiocare/./src/main/adapters/serverless-adapter.ts?");

/***/ }),

/***/ "./src/main/factories/controllers/add-user-factory.ts":
/*!************************************************************!*\
  !*** ./src/main/factories/controllers/add-user-factory.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AddUserFactory = void 0;\nvar user_prisma_repository_1 = __webpack_require__(/*! @/infra/repos/prisma/user-prisma-repository */ \"./src/infra/repos/prisma/user-prisma-repository.ts\");\nvar add_user_controller_1 = __webpack_require__(/*! @/presentation/controllers/add-user-controller */ \"./src/presentation/controllers/add-user-controller.ts\");\nvar cryptography_1 = __webpack_require__(/*! @/infra/cryptography */ \"./src/infra/cryptography/index.ts\");\nvar services_1 = __webpack_require__(/*! @/data/services */ \"./src/data/services/index.ts\");\nvar add_user_validation_1 = __webpack_require__(/*! ../validators/add-user-validation */ \"./src/main/factories/validators/add-user-validation.ts\");\nvar AddUserFactory = function () {\n    var repository = new user_prisma_repository_1.UserPrismaRepository();\n    var uuidGenerator = new cryptography_1.UuidAdapter();\n    var crypto = new cryptography_1.BcryptAdapter(10);\n    var addUserService = new services_1.DbAddUser(repository, uuidGenerator, crypto);\n    var validations = (0, add_user_validation_1.makeAddUserValidation)();\n    var addUserController = new add_user_controller_1.AddUserController(addUserService, validations);\n    return addUserController;\n};\nexports.AddUserFactory = AddUserFactory;\n\n\n//# sourceURL=webpack://api-physiocare/./src/main/factories/controllers/add-user-factory.ts?");

/***/ }),

/***/ "./src/main/factories/validators/add-user-validation.ts":
/*!**************************************************************!*\
  !*** ./src/main/factories/validators/add-user-validation.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.makeAddUserValidation = void 0;\nvar validators_1 = __webpack_require__(/*! @/validation/validators */ \"./src/validation/validators/index.ts\");\nvar compare_fields_1 = __webpack_require__(/*! @/validation/validators/compare-fields */ \"./src/validation/validators/compare-fields.ts\");\nvar makeAddUserValidation = function () {\n    var validations = [];\n    var requiredParams = [\n        \"name\",\n        \"email\",\n        \"password\",\n        \"passwordConfirmation\",\n    ];\n    for (var _i = 0, requiredParams_1 = requiredParams; _i < requiredParams_1.length; _i++) {\n        var param = requiredParams_1[_i];\n        validations.push(new validators_1.MissingParamsValidation(param));\n    }\n    validations.push(new compare_fields_1.CompareFieldValidation('password', 'passwordConfirmation'));\n    var validation = new validators_1.ValidationComposite(validations);\n    return validation;\n};\nexports.makeAddUserValidation = makeAddUserValidation;\n\n\n//# sourceURL=webpack://api-physiocare/./src/main/factories/validators/add-user-validation.ts?");

/***/ }),

/***/ "./src/presentation/controllers/add-user-controller.ts":
/*!*************************************************************!*\
  !*** ./src/presentation/controllers/add-user-controller.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AddUserController = void 0;\nvar helpers_1 = __webpack_require__(/*! @/presentation/helpers */ \"./src/presentation/helpers/index.ts\");\nvar invalid_params_error_1 = __webpack_require__(/*! ../errors/invalid-params-error */ \"./src/presentation/errors/invalid-params-error.ts\");\nvar AddUserController = /** @class */ (function () {\n    function AddUserController(userService, validation, authentication) {\n        this.userService = userService;\n        this.validation = validation;\n        this.authentication = authentication;\n    }\n    AddUserController.prototype.handle = function (_a) {\n        var body = _a.body;\n        return __awaiter(this, void 0, Promise, function () {\n            var error, user, token, responseUser;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        if (!body)\n                            return [2 /*return*/, (0, helpers_1.badRequest)(new invalid_params_error_1.InvalidParamsException())];\n                        error = this.validation.validate(body);\n                        if (error) {\n                            return [2 /*return*/, (0, helpers_1.badRequest)(error)];\n                        }\n                        return [4 /*yield*/, this.userService.add({\n                                email: body.email,\n                                name: body.name,\n                                password: body.password,\n                            })];\n                    case 1:\n                        user = _b.sent();\n                        if (user instanceof Error) {\n                            return [2 /*return*/, (0, helpers_1.badRequest)(user)];\n                        }\n                        return [4 /*yield*/, this.authentication.signIn({\n                                email: body.email,\n                                password: body.password\n                            })];\n                    case 2:\n                        token = _b.sent();\n                        responseUser = {\n                            name: body.name,\n                            email: body.email,\n                            accessToken: token\n                        };\n                        return [2 /*return*/, (0, helpers_1.ok)(responseUser)];\n                }\n            });\n        });\n    };\n    return AddUserController;\n}());\nexports.AddUserController = AddUserController;\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/controllers/add-user-controller.ts?");

/***/ }),

/***/ "./src/presentation/errors/index.ts":
/*!******************************************!*\
  !*** ./src/presentation/errors/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ../../domain/features/errors/registration-error */ \"./src/domain/features/errors/registration-error.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./missing-params-error */ \"./src/presentation/errors/missing-params-error.ts\"), exports);\n__exportStar(__webpack_require__(/*! ../../domain/features/errors/registration-error */ \"./src/domain/features/errors/registration-error.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./not-found-error */ \"./src/presentation/errors/not-found-error.ts\"), exports);\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/errors/index.ts?");

/***/ }),

/***/ "./src/presentation/errors/invalid-params-error.ts":
/*!*********************************************************!*\
  !*** ./src/presentation/errors/invalid-params-error.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.InvalidParamsException = void 0;\nvar InvalidParamsException = /** @class */ (function (_super) {\n    __extends(InvalidParamsException, _super);\n    function InvalidParamsException(param) {\n        var _this = _super.call(this, param ? \"Invalid param: \".concat(param) : 'Invalid params request') || this;\n        _this.name = 'InvalidParamsException';\n        return _this;\n    }\n    return InvalidParamsException;\n}(Error));\nexports.InvalidParamsException = InvalidParamsException;\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/errors/invalid-params-error.ts?");

/***/ }),

/***/ "./src/presentation/errors/missing-params-error.ts":
/*!*********************************************************!*\
  !*** ./src/presentation/errors/missing-params-error.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MissingParamsException = void 0;\nvar MissingParamsException = /** @class */ (function (_super) {\n    __extends(MissingParamsException, _super);\n    function MissingParamsException(param) {\n        var _this = _super.call(this, param ? \"Missing param: \".concat(param) : \"Missing params\") || this;\n        _this.name = 'MissingParamsError';\n        return _this;\n    }\n    return MissingParamsException;\n}(Error));\nexports.MissingParamsException = MissingParamsException;\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/errors/missing-params-error.ts?");

/***/ }),

/***/ "./src/presentation/errors/not-found-error.ts":
/*!****************************************************!*\
  !*** ./src/presentation/errors/not-found-error.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NotFoundException = void 0;\nvar NotFoundException = /** @class */ (function (_super) {\n    __extends(NotFoundException, _super);\n    function NotFoundException(param) {\n        var _this = _super.call(this, param ? \"\".concat(param, \" not found\") : 'Not found') || this;\n        _this.name = 'NotFoundError';\n        return _this;\n    }\n    return NotFoundException;\n}(Error));\nexports.NotFoundException = NotFoundException;\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/errors/not-found-error.ts?");

/***/ }),

/***/ "./src/presentation/errors/server-error.ts":
/*!*************************************************!*\
  !*** ./src/presentation/errors/server-error.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ServerError = void 0;\nvar ServerError = /** @class */ (function (_super) {\n    __extends(ServerError, _super);\n    function ServerError() {\n        var _this = _super.call(this, 'Internal server error') || this;\n        _this.name = 'ServerError';\n        return _this;\n    }\n    return ServerError;\n}(Error));\nexports.ServerError = ServerError;\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/errors/server-error.ts?");

/***/ }),

/***/ "./src/presentation/helpers/http-helper.ts":
/*!*************************************************!*\
  !*** ./src/presentation/helpers/http-helper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.serverError = exports.badRequest = exports.ok = void 0;\nvar server_error_1 = __webpack_require__(/*! @/presentation/errors/server-error */ \"./src/presentation/errors/server-error.ts\");\nvar ok = function (data) { return ({\n    statusCode: 200,\n    data: data,\n}); };\nexports.ok = ok;\nvar badRequest = function (error) {\n    if (error instanceof Error) {\n        return {\n            statusCode: 400,\n            data: error !== null && error !== void 0 ? error : new Error(\"Something went wrong\"),\n        };\n    }\n    else {\n        return {\n            statusCode: 400,\n            data: new Error(error)\n        };\n    }\n};\nexports.badRequest = badRequest;\nvar serverError = function () { return ({\n    statusCode: 500,\n    data: new server_error_1.ServerError(),\n}); };\nexports.serverError = serverError;\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/helpers/http-helper.ts?");

/***/ }),

/***/ "./src/presentation/helpers/index.ts":
/*!*******************************************!*\
  !*** ./src/presentation/helpers/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./http-helper */ \"./src/presentation/helpers/http-helper.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./prisma-client */ \"./src/presentation/helpers/prisma-client.ts\"), exports);\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/helpers/index.ts?");

/***/ }),

/***/ "./src/presentation/helpers/prisma-client.ts":
/*!***************************************************!*\
  !*** ./src/presentation/helpers/prisma-client.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.dbClient = void 0;\nvar client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nexports.dbClient = new client_1.PrismaClient();\n\n\n//# sourceURL=webpack://api-physiocare/./src/presentation/helpers/prisma-client.ts?");

/***/ }),

/***/ "./src/validation/validators/compare-fields.ts":
/*!*****************************************************!*\
  !*** ./src/validation/validators/compare-fields.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CompareFieldValidation = void 0;\nvar invalid_params_error_1 = __webpack_require__(/*! @/presentation/errors/invalid-params-error */ \"./src/presentation/errors/invalid-params-error.ts\");\nvar CompareFieldValidation = /** @class */ (function () {\n    function CompareFieldValidation(field, fieldToCompare) {\n        this.field = field;\n        this.fieldToCompare = fieldToCompare;\n    }\n    CompareFieldValidation.prototype.validate = function (input) {\n        if (input[this.field] !== input(this.fieldToCompare)) {\n            return new invalid_params_error_1.InvalidParamsException(this.fieldToCompare);\n        }\n    };\n    return CompareFieldValidation;\n}());\nexports.CompareFieldValidation = CompareFieldValidation;\n\n\n//# sourceURL=webpack://api-physiocare/./src/validation/validators/compare-fields.ts?");

/***/ }),

/***/ "./src/validation/validators/index.ts":
/*!********************************************!*\
  !*** ./src/validation/validators/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./missing-params */ \"./src/validation/validators/missing-params.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./validation-composite */ \"./src/validation/validators/validation-composite.ts\"), exports);\n\n\n//# sourceURL=webpack://api-physiocare/./src/validation/validators/index.ts?");

/***/ }),

/***/ "./src/validation/validators/missing-params.ts":
/*!*****************************************************!*\
  !*** ./src/validation/validators/missing-params.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MissingParamsValidation = void 0;\nvar errors_1 = __webpack_require__(/*! @/presentation/errors */ \"./src/presentation/errors/index.ts\");\nvar MissingParamsValidation = /** @class */ (function () {\n    function MissingParamsValidation(fieldName) {\n        this.fieldName = fieldName;\n    }\n    MissingParamsValidation.prototype.validate = function (input) {\n        if (!input[this.fieldName]) {\n            return new errors_1.MissingParamsException(this.fieldName);\n        }\n    };\n    return MissingParamsValidation;\n}());\nexports.MissingParamsValidation = MissingParamsValidation;\n\n\n//# sourceURL=webpack://api-physiocare/./src/validation/validators/missing-params.ts?");

/***/ }),

/***/ "./src/validation/validators/validation-composite.ts":
/*!***********************************************************!*\
  !*** ./src/validation/validators/validation-composite.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ValidationComposite = void 0;\nvar ValidationComposite = /** @class */ (function () {\n    function ValidationComposite(validations) {\n        this.validations = validations;\n    }\n    ValidationComposite.prototype.validate = function (input) {\n        for (var _i = 0, _a = this.validations; _i < _a.length; _i++) {\n            var validation = _a[_i];\n            var error = validation.validate(input);\n            if (error) {\n                return error;\n            }\n        }\n    };\n    return ValidationComposite;\n}());\nexports.ValidationComposite = ValidationComposite;\n\n\n//# sourceURL=webpack://api-physiocare/./src/validation/validators/validation-composite.ts?");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infra/serverless/functions/add-account.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;