const express = require('express'),
      next = require('next'),
      bodyParser= require('body-parser'),
      mongoose = require('mongoose');


      const dev = process.env.NODE_ENV !== 'production';
      const app = next({dev});
