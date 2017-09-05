import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { WorkspaceLbs } from './workspace-lbs.model';
import { WorkspaceLbsService } from './workspace-lbs.service';

@Component({
    selector: 'jhi-workspace-lbs-detail',
    templateUrl: './workspace-lbs-detail.component.html'
})
export class WorkspaceLbsDetailComponent implements OnInit, OnDestroy {

    workspace: WorkspaceLbs;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private workspaceService: WorkspaceLbsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInWorkspaces();
    }

    load(id) {
        this.workspaceService.find(id).subscribe((workspace) => {
            this.workspace = workspace;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInWorkspaces() {
        this.eventSubscriber = this.eventManager.subscribe(
            'workspaceListModification',
            (response) => this.load(this.workspace.id)
        );
    }
}
