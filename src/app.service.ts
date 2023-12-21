import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class ServiceA {
  getHello(): string {
    return 'Hello, World! A';
  }
}

export class BaseService {
  @Inject(ServiceA) private readonly serviceA: ServiceA;
  // constructor(private readonly serviceA: ServiceA) {}
  
  getHello(): string {
    return 'Hello, World! BASE';
  }

  doFuncFromA(): string {
    return this.serviceA.getHello();
  }
}

@Injectable()
export class ServiceB extends BaseService {
  // constructor(private readonly _serviceA: ServiceA) {
  //   super(_serviceA)
  // }

  getHello(): string {
    return this.doFuncFromA();
  }
}