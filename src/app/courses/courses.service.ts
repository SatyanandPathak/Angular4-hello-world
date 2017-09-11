import {Injectable} from '@angular/core'


@Injectable()
export class CoursesService {
    getCourses(){
        return ['SvcCourse1', 'SvcCourse2', 'SvcCourse3']
    }
}