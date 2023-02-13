package org.volcampanion.reposistories;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entities.TalkEntity;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class TalkRepo implements PanacheRepository<TalkEntity> {

    public List<TalkEntity> findByTitleLike(String title){
        return find(String.format("titre like ''%%%s%%",title)).list();
    }

}