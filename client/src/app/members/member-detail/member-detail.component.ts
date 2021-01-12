import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Member } from 'src/app/_models/member';
import { MembersService } from '_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private memeberService: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions=[
    {
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    }]
  }

  getGalleryImages(): NgxGalleryImage[]{
    const imageUrls = [];
    for(const photos of this.member.photos){
      imageUrls.push({
        small: photos?.url,
        medium: photos?.url,
        large: photos?.url
      })
    }
    return imageUrls;
  }


  loadMember(){
    this.memeberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(m=>{
      this.member = m;
      this.galleryImages= this.getGalleryImages();
    })
  }

}
