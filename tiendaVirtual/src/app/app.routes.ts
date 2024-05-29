import { Routes } from '@angular/router';
import { HomeComponent } from './home/HomeComponent.1';
import { Component } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';

export const routes: Routes = [
{path:"",component:HomeComponent},
{path:"producto", component:ProductoComponent}


];
