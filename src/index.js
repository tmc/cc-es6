import {hello, recentUsers, GameScore_alltime_high} from './functions';

Parse.Cloud.define("hello", hello);
Parse.Cloud.define("recentUsers", recentUsers);
Parse.Cloud.define("GameScore_alltime_high", GameScore_alltime_high);

